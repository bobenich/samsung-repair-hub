
export interface FormPayload {
  name: string;
  phone: string;
  message: string;
  formType: string;
}

export const submitFormToGoogleApps = async (formPayload: FormPayload): Promise<Response> => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzryZgY_pFXC2esv7xDmaebzda4_Qeu5TenC3QuNSLA5p5dhKnpHBcoM2R5tkEnAdRA/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formPayload)
  });
  
  if (!response.ok) {
    throw new Error('Ошибка при отправке данных');
  }
  
  return response;
};
