import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Database features will not work. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.');
}

// Only create the client if we have the credentials to avoid an internal crash in createClient
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any; // Cast as any to avoid type errors in the rest of the app, but calls will fail gracefully through the try-catch in saveRegistration

export interface RegistrationData {
  name: string;
  email: string;
  date_of_birth: string;
  referral_source: string;
}

export interface RegistrationResponse {
  success: boolean;
  error?: string;
  isDuplicate?: boolean;
}

export const saveRegistration = async (
  data: RegistrationData
): Promise<RegistrationResponse> => {
  try {
    const { error } = await supabase
      .from('early_registrations')
      .insert([
        {
          name: data.name,
          email: data.email.toLowerCase().trim(), // Normalize email
          date_of_birth: data.date_of_birth,
          referral_source: data.referral_source,
        },
      ]);

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') { // Postgres unique violation error code
        return {
          success: false,
          error: 'This email is already registered.',
          isDuplicate: true,
        };
      }

      console.error('Supabase error:', error);
      return {
        success: false,
        error: error.message || 'Failed to save registration.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
};


