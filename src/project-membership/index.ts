// https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access level for the member. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership#access_level ProjectMembership#access_level}
  */
  readonly accessLevel: string;
  /**
  * Expiration date for the project membership. Format: `YYYY-MM-DD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership#expires_at ProjectMembership#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership#id ProjectMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID or URL-encoded path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership#project ProjectMembership#project}
  */
  readonly project: string;
  /**
  * The id of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership#user_id ProjectMembership#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership gitlab_project_membership}
*/
export class ProjectMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectMembership to import
  * @param importFromId The id of the existing ProjectMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/project_membership gitlab_project_membership} Resource
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
        providerVersion: '17.7.0',
        providerVersionConstraint: '~> 17.0'
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
    this._project = config.project;
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
      project: cdktf.stringToTerraform(this._project),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
