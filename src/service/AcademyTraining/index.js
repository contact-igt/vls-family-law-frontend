import { _axios } from "@/helper/axios";

// Must match the client_key value in the clients DB table
// Run Step 1 first: POST /api/v1/clients { name: "VLS Law", client_key: "vls_law" }
const FAMILY_LAW_CLIENT_KEY = "vls_law";

export class FamilyLawApi {
  FamilyLawRegister = async (data) => {
    return await _axios(
      "post",
      "/family-law/register",
      { ...data, client_key: data?.client_key || FAMILY_LAW_CLIENT_KEY },
      "application/json",
      {},
      { "X-Client-Key": FAMILY_LAW_CLIENT_KEY }
    );
  };
}
