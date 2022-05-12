// https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectProtectedEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#environment ProjectProtectedEnvironment#environment}
  */
  readonly environment: string;
  /**
  * The ID or full path of the project which the protected environment is created against.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#project ProjectProtectedEnvironment#project}
  */
  readonly project: string;
  /**
  * deploy_access_levels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#deploy_access_levels ProjectProtectedEnvironment#deploy_access_levels}
  */
  readonly deployAccessLevels: ProjectProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable;
}
export interface ProjectProtectedEnvironmentDeployAccessLevels {
  /**
  * Levels of access required to deploy to this protected environment. Valid values are `developer`, `maintainer`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#access_level ProjectProtectedEnvironment#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The ID of the group allowed to deploy to this protected environment. The project must be shared with the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#group_id ProjectProtectedEnvironment#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of the user allowed to deploy to this protected environment. The user must be a member of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#user_id ProjectProtectedEnvironment#user_id}
  */
  readonly userId?: number;
}

export function projectProtectedEnvironmentDeployAccessLevelsToTerraform(struct?: ProjectProtectedEnvironmentDeployAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment gitlab_project_protected_environment}
*/
export class ProjectProtectedEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_protected_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment gitlab_project_protected_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectProtectedEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectProtectedEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_protected_environment',
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
    this._environment = config.environment;
    this._project = config.project;
    this._deployAccessLevels = config.deployAccessLevels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // deploy_access_levels - computed: false, optional: false, required: true
  private _deployAccessLevels?: ProjectProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable; 
  public get deployAccessLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('deploy_access_levels');
  }
  public set deployAccessLevels(value: ProjectProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable) {
    this._deployAccessLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAccessLevelsInput() {
    return this._deployAccessLevels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      project: cdktf.stringToTerraform(this._project),
      deploy_access_levels: cdktf.listMapper(projectProtectedEnvironmentDeployAccessLevelsToTerraform)(this._deployAccessLevels),
    };
  }
}
