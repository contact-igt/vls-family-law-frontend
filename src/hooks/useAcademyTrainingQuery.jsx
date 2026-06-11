import { FamilyLawApi } from "@/service/AcademyTraining";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";

export const FamilyLawRegisterQuery = () => {
  const familyLawApi = new FamilyLawApi();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    async ({ value }) => {
      return await familyLawApi.FamilyLawRegister(value);
    },
    {
      onSuccess: () => {
        enqueueSnackbar("Registered successfully", { variant: "success" });
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";

        enqueueSnackbar(message, { variant: "error" });

        throw error;
      },
    }
  );
};
