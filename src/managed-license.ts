// https://www.terraform.io/docs/providers/gitlab/r/managed_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The approval status of the license. Valid values are: `approved`, `blacklisted`, `allowed`, `denied`. "approved" and "blacklisted" 
				have been deprecated in favor of "allowed" and "denied"; use "allowed" and "denied" for GitLab versions 15.0 and higher. 
				Prior to version 15.0 and after 14.6, the values are equivalent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/managed_license#approval_status ManagedLicense#approval_status}
  */
  readonly approvalStatus: string;
  /**
  * The name of the managed license (I.e., 'Apache License 2.0' or 'MIT license')
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/managed_license#name ManagedLicense#name}
  */
  readonly name: string;
  /**
  * The ID of the project under which the managed license will be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/managed_license#project ManagedLicense#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/managed_license gitlab_managed_license}
*/
export class ManagedLicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_managed_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/managed_license gitlab_managed_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_managed_license',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._approvalStatus = config.approvalStatus;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_status - computed: false, optional: false, required: true
  private _approvalStatus?: string; 
  public get approvalStatus() {
    return this.getStringAttribute('approval_status');
  }
  public set approvalStatus(value: string) {
    this._approvalStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalStatusInput() {
    return this._approvalStatus;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_status: cdktf.stringToTerraform(this._approvalStatus),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
