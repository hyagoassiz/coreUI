interface IUsePermission {
  checkPermission(permission: string): boolean;
}

export const usePermission = (): IUsePermission => {
  function checkPermission(permission: string): boolean {
    if (permission === "") {
      return true;
    }

    return false;
  }

  return { checkPermission };
};
