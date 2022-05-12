// https://www.terraform.io/docs/providers/gitlab/r/project_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access level for the project access token. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `master`. Default is `maintainer`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_access_token#access_level ProjectAccessToken#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Time the token will expire it, YYYY-MM-DD format. Will not expire per default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_access_token#expires_at ProjectAccessToken#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * A name to describe the project access token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_access_token#name ProjectAccessToken#name}
  */
  readonly name: string;
  /**
  * The id of the project to add the project access token to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_access_token#project ProjectAccessToken#project}
  */
  readonly project: string;
  /**
  * Valid values: `api`, `read_api`, `read_repository`, `write_repository`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_access_token#scopes ProjectAccessToken#scopes}
  */
  readonly scopes: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_access_token gitlab_project_access_token}
*/
export class ProjectAccessToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_access_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/project_access_token gitlab_project_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_access_token',
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
    this._accessLevel = config.accessLevel;
    this._expiresAt = config.expiresAt;
    this._name = config.name;
    this._project = config.project;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // revoked - computed: true, optional: false, required: false
  public get revoked() {
    return this.getBooleanAttribute('revoked');
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
    };
  }
}
