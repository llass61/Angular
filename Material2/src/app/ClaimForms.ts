export class ClaimForm
{
  doc: number;
  acct: number;
  formNumber: number;
  status: string;

  constructor() {}

  getClaimFormsJSON() { return claimForms; }

  getClaimForms()
  {
    const claim1 = new ClaimForm();
    const claim2 = new ClaimForm();
    const claim3 = new ClaimForm();
    const claim4 = new ClaimForm();
    claim1.setData(11035, 224, 5001, 'pending');
    claim2.setData(11035, 224, 5002, 'pending');
    claim3.setData(11035, 224, 5003, 'pending');
    claim4.setData(11035, 224, 5004, 'pending');

    return [claim1, claim2, claim3, claim4 ];
  }

  setData(doc: number, acct: number, formNumber: number, status: string)
  {
    this.doc = doc;
    this.acct = acct;
    this.formNumber = formNumber;
    this.status = status;
  }
}

const claimForms = [
  { doc: 11035, acct: 244, formNumber: 5001, status: 'pending' },
  { doc: 11035, acct: 244, formNumber: 5002, status: 'pending' },
  { doc: 11035, acct: 244, formNumber: 5003, status: 'pending' },
  { doc: 11035, acct: 244, formNumber: 5004, status: 'pending' }
];
