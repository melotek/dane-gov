import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export const useGetGlobal = () => {
  const { data, error, ...rest } = useSWR(
    "/api/v1",
    fetcher,
    {
      // revalidateOnMount: false,
      revalidateOnFocus: false,
      // ...also disable error retry and interval
    }
  );
  return {
    data,
    error,
    loading: !data && error,
    ...rest,
  };
};
export const useGetLocalInstitutions = () => {
  const { data, error, ...rest } = useSWR(
    "/api/v1/administracja/samorzadowa",
    fetcher,
    {
      // revalidateOnMount: false,
      revalidateOnFocus: false,
      // ...also disable error retry and interval
    }
  );
  return {
    data,
    error,
    loading: !data && error,
    ...rest,
  };
};
export const useGetUslugi = (url) => {
  const { data, error, ...rest } = useSWR(url, fetcher, {
    // revalidateOnMount: false,
    revalidateOnFocus: false,
    // ...also disable error retry and interval
  });
  return {
    data,
    error,
    loading: !data && error,
    ...rest,
  };
};

export const useGetStateInstitutions = () => {
  const { data, error, ...rest } = useSWR(
    "/api/v1/administracja/rzadowa",
    fetcher,
    {
      // revalidateOnMount: false,
      revalidateOnFocus: false,

      // ...also disable error retry and interval
    }
  );
  return {
    data,
    error,
    loading: !data && error,
    ...rest,
  };
};
export const useGetInstitutionsByCity = (url) => {
  const { data, error, ...rest } = useSWR(url, fetcher, {
    // revalidateOnMount: false,
    revalidateOnFocus: false,

    // ...also disable error retry and interval
  });
  return {
    data,
    error,
    loading: !data && error,
    ...rest,
  };
};
export const useGetMedicalBenefitsByName= (url) => {
  const { data, error, ...rest } = useSWR(url, fetcher, {
    // revalidateOnMount: false,
    revalidateOnFocus: false,

    // ...also disable error retry and interval
  });
  return {
    data,
    error,
    loading: !data && error,
    ...rest,
  };
};
export const useGetMedicalBenefits= () => {
  const { data, error, ...rest } = useSWR("/api/v1/terminy_leczenia/", fetcher, {
    // revalidateOnMount: false,
    revalidateOnFocus: false,

    // ...also disable error retry and interval
  });
  return {
    data,
    error,
    loading: !data && error,
    ...rest,
  };
};
