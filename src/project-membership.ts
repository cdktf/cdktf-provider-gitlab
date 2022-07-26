// https://www.terraform.io/docs/providers/gitlab/r/project_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access level for the member. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#access_level ProjectMembership#access_level}
  */
  readonly accessLevel: string;
  /**
  * Expiration date for the project membership. Format: `YYYY-MM-DD`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#expires_at ProjectMembership#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#id ProjectMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#project_id ProjectMembership#project_id}
  */
  readonly projectId: string;
  /**
  * The id of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#user_id ProjectMembership#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership gitlab_project_membership}
*/
export class ProjectMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership gitlab_project_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_membership',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.16.1',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._expiresAt = config.expiresAt;
    this._id = config.id;
    this._projectId = config.projectId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }
}
