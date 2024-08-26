import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => AsyncStorage);

const authTokenAtom = atomWithStorage<any>("authToken", null, storage);
const authUserAtom = atomWithStorage<any>("authUser", null, storage);

export { authTokenAtom, authUserAtom };
