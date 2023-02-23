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
  * The number of approvals required to deploy to this environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#required_approval_count ProjectProtectedEnvironment#required_approval_count}
  */
  readonly requiredApprovalCount?: number;
  /**
  * deploy_access_levels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#deploy_access_levels ProjectProtectedEnvironment#deploy_access_levels}
  */
  readonly deployAccessLevels?: ProjectProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable;
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

export class ProjectProtectedEnvironmentDeployAccessLevelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectProtectedEnvironmentDeployAccessLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectProtectedEnvironmentDeployAccessLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._groupId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._groupId = value.groupId;
      this._userId = value.userId;
    }
  }

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

  // access_level_description - computed: true, optional: false, required: false
  public get accessLevelDescription() {
    return this.getStringAttribute('access_level_description');
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class ProjectProtectedEnvironmentDeployAccessLevelsList extends cdktf.ComplexList {
  public internalValue? : ProjectProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectProtectedEnvironmentDeployAccessLevelsOutputReference {
    return new ProjectProtectedEnvironmentDeployAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
        providerVersion: '15.9.0',
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
    this._environment = config.environment;
    this._project = config.project;
    this._requiredApprovalCount = config.requiredApprovalCount;
    this._deployAccessLevels.internalValue = config.deployAccessLevels;
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

  // id - computed: true, optional: false, required: false
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

  // required_approval_count - computed: true, optional: true, required: false
  private _requiredApprovalCount?: number; 
  public get requiredApprovalCount() {
    return this.getNumberAttribute('required_approval_count');
  }
  public set requiredApprovalCount(value: number) {
    this._requiredApprovalCount = value;
  }
  public resetRequiredApprovalCount() {
    this._requiredApprovalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalCountInput() {
    return this._requiredApprovalCount;
  }

  // deploy_access_levels - computed: false, optional: true, required: false
  private _deployAccessLevels = new ProjectProtectedEnvironmentDeployAccessLevelsList(this, "deploy_access_levels", true);
  public get deployAccessLevels() {
    return this._deployAccessLevels;
  }
  public putDeployAccessLevels(value: ProjectProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable) {
    this._deployAccessLevels.internalValue = value;
  }
  public resetDeployAccessLevels() {
    this._deployAccessLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAccessLevelsInput() {
    return this._deployAccessLevels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      project: cdktf.stringToTerraform(this._project),
      required_approval_count: cdktf.numberToTerraform(this._requiredApprovalCount),
      deploy_access_levels: cdktf.listMapper(projectProtectedEnvironmentDeployAccessLevelsToTerraform, true)(this._deployAccessLevels.internalValue),
    };
  }
}
