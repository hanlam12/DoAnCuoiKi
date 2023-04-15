export class Job{
  constructor(
  public _id:any=null,
  public jobJD:string="",
  public image:string="",
  public job_name:string="",
  public company:string="",
  public category: Array<category>,
  public address:string="",
  public salary:string="",
  public exprience:string="",
  public dealine:string="",
  public welfare:string="",
  public description:string="",
  public job_requirement:string="",
  public contact:string="",
  public contact_person:string="",
  public phone_person:number,
  public degree:string="",
  public age:string="",
  public position:string="",
  public gender:string="",
  public recruiting_amount:string="",
  public work_form:string=""
  ){}
  }

export class User{
  constructor(
    public _id:any=null,
    public userID:string="",
    public fullname:string="",
    public email:string="",
    public gender:string="",
    public DOB: string="",
    public phone:number,
    public address:string="",
    public district:string="",
    public city:string="",
    public password:string="",
    public cv:Array<cv>,
    public image:string=""
    ){}
}

export class Company{
  constructor(
    public _id:any=null,
    public company_name:string="",
    public company_image:string="",
    public company_intro:string="",
    public company_scale:string="",
    public company_address: string ="",
    public company_website:string=""
    ){}
}
export interface category{
   category_detail: string
}

export interface cv{
  cv_detail: string
}

