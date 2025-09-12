export function objectToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    // If value is a File or Blob (for uploads)
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    }
    // If value is an array
    else if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    }
    // If value is an object (nested JSON)
    else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    }
    // Primitive values (string, number, boolean)
    else {
      formData.append(key, String(value));
    }
  });

  return formData;
}