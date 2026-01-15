import { getPackages } from "./getPackages";

export async function getPackage(pkgName: string) {
    const { packages } = await getPackages();
    return packages.find(
        (pkg: any) => pkg.packageJson.name === pkgName,
    );
}