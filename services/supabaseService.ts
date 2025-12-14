import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

