export function useFlowbite(callback : any) {
    if (process.client) {
      import('flowbite').then((flowbite) => {
        callback(flowbite);
      });
    }
}