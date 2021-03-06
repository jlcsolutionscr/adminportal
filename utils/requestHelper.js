export async function get(endpointURL, token) {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token !== null) {
      headers.Authorization = 'bearer ' + token;
    }
    const response = await fetch(endpointURL, {
      method: 'GET',
      headers,
    });
    if (!response.ok) {
      let error = '';
      try {
        error = await response.json();
      } catch {
        error =
          'Error al comunicarse con el servicio de factura electrónica. Por favor verifique su conexión de datos.';
      }
      throw new Error(error);
    }
  } catch (error) {
    throw error;
  }
}

export async function getWithResponse(endpointURL, token) {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token !== null) {
      headers.Authorization = 'bearer ' + token;
    }
    const response = await fetch(endpointURL, {
      method: 'GET',
      headers,
    });
    if (!response.ok) {
      let error = '';
      try {
        error = await response.json();
      } catch {
        error =
          'Error al comunicarse con el servicio de factura electrónica. Por favor verifique su conexión de datos.';
      }
      throw new Error(error);
    } else {
      const data = await response.json();
      if (data !== '') {
        return JSON.parse(data);
      } else {
        return null;
      }
    }
  } catch (error) {
    throw error;
  }
}

export async function post(endpointURL, token, datos) {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token !== '') {
      headers.Authorization = 'bearer ' + token;
    }
    const response = await fetch(endpointURL, {
      method: 'POST',
      headers,
      body: JSON.stringify(datos),
    });
    if (!response.ok) {
      let error = '';
      try {
        error = await response.json();
      } catch {
        error =
          'Error al comunicarse con el servicio de factura electrónica. Por favor verifique su conexión de datos.';
      }
      throw new Error(error);
    }
  } catch (error) {
    throw error;
  }
}

export async function postWithResponse(endpointURL, token, datos) {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token != '') {
      headers.Authorization = 'bearer ' + token;
    }
    const response = await fetch(endpointURL, {
      method: 'POST',
      headers,
      body: JSON.stringify(datos),
    });
    if (!response.ok) {
      let error = '';
      try {
        error = await response.json();
      } catch {
        error =
          'Error al comunicarse con el servicio de factura electrónica. Por favor verifique su conexión de datos.';
      }
      throw new Error(error);
    } else {
      const data = await response.json();
      if (data !== '') {
        return JSON.parse(data);
      } else {
        return null;
      }
    }
  } catch (error) {
    throw error;
  }
}
