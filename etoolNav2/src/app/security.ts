

export class Security
{
    private retVal: boolean;

    private welcome: boolean = true;
    private financialData: boolean = true;
    private insuranceTools: boolean = true;
    private support: boolean = false;

    private productionCheck: boolean = true;   
    private fundingRequest: boolean = false; 
    private claimStatus: boolean = false;
    private eligibility: boolean = true;

    isAllowed(name: string): boolean
    {
        switch(name)
        {
            case "welcome":
            {
                this.retVal = this.welcome;
                break;
            }
            case "financialData":
            {
                this.retVal = this.financialData;
                break;
            }
            case "insuranceTools":
            {
                this.retVal = this.insuranceTools;
                break;
            }
            case "support":
            {
                this.retVal = this.support;
                break;
            }
            case "productionCheck":
            {
                this.retVal = this.productionCheck;
                break;
            }
            case "fundingRequest":
            {
                this.retVal = this.fundingRequest;
                break;
            }
            case "claimStatus":
            {
                this.retVal = this.claimStatus;
                break;
            }
            case "eligibility":
            {
                this.retVal = this.eligibility;
                break;
            }

            default:
            {
                this.retVal = false;
                break;
            }
        }
        console.log("checking " + name  + ": " + this.retVal);

        return this.retVal;
    }
}