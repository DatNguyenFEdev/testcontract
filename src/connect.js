import { ethers } from "ethers";
export const {connect} = async function() {
    const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      await provider.send("eth_requestAccounts", []);
      this.signer = provider.getSigner();
      const contract = new ethers.Contract(
        this.addressWallet,
        this.abi,
        this.signer
      );
}