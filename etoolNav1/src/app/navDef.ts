export class NavDef
{
    getDefs()
    {
        return [
            {id: "welcome", name: "Welcome", showSubMenu: false, sub: []},
            {id: "financialData", name: "Financial Data", showSubMenu: false, sub: [
                {id: "productionCheck", name: "Production Check"},
                {id: "fundingRequest", name: "Funding Request"}
            ]},
            {id: "insuranceTools", name: "Insurance Tools", showSubMenu: false, sub: [
                {id: "claimStatus", name: "Claim Status"},
                {id: "eligibility", name: "Eligibility"}
            ]},
            {id: "support", name: "Support", showSubMenu: false, sub: []}
        ];
    }
}