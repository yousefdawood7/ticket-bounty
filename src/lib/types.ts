export type ActionReturnType = {
  message: string; // for the toast notification
  fieldErrors?: Record<string, string[]>; // for each field's error
  error?: boolean;
  redirectError?: unknown;
};
