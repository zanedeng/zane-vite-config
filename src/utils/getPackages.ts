import { findMonorepoRoot } from "./findMonorepoRoot";
import { getPackages as getPackagesFunc } from "@manypkg/get-packages";

export async function getPackages() {
    const root = findMonorepoRoot();
    return await getPackagesFunc(root);
}