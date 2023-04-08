// https://www.terraform.io/docs/providers/gitlab/d/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this Terraform resource. In the format of `<application_id>`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/application#id DataGitlabApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/application gitlab_application}
*/
export class DataGitlabApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/application gitlab_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_application',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.10.0',
        providerVersionConstraint: '~> 15.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // confidential - computed: true, optional: false, required: false
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}