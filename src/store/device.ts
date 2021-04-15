import { action, observable } from "mobx";

interface MobileProps {
  device: string;
}
function isMobile() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
export default class DeviceCheckStore {
  @observable Device: MobileProps = { device: "desktop" };
  constructor() {
    if (isMobile()) {
      this.ChageMobile();
    }
  }
  @action ChageMobile() {
    this.Device.device = "mobile";
  }
  @action ChageDesktop() {
    this.Device.device = "desktop";
  }
  @action IsMobile() {
    return this.Device.device === "mobile";
  }
}
