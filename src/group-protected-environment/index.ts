/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupProtectedEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of approval rules to deploy, with each described by a hash. Elements in the `approval_rules` should be one of `user_id`, `group_id` or `access_level`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#approval_rules GroupProtectedEnvironment#approval_rules}
  */
  readonly approvalRules?: GroupProtectedEnvironmentApprovalRules[] | cdktf.IResolvable;
  /**
  * Array of access levels allowed to deploy, with each described by a hash. Elements in the `deploy_access_levels` should be one of `user_id`, `group_id` or `access_level`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#deploy_access_levels GroupProtectedEnvironment#deploy_access_levels}
  */
  readonly deployAccessLevels: GroupProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable;
  /**
  * The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#environment GroupProtectedEnvironment#environment}
  */
  readonly environment: string;
  /**
  * The ID or full path of the group which the protected environment is created against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#group GroupProtectedEnvironment#group}
  */
  readonly group: string;
}
export interface GroupProtectedEnvironmentApprovalRules {
  /**
  * Levels of access allowed to approve a deployment to this protected environment. Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The ID of the group allowed to approve a deployment to this protected environment. TThe group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}
  */
  readonly groupId?: number;
  /**
  * Group inheritance allows access rules to take inherited group membership into account. Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}
  */
  readonly groupInheritanceType?: number;
  /**
  * The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#required_approvals GroupProtectedEnvironment#required_approvals}
  */
  readonly requiredApprovals?: number;
  /**
  * The ID of the user allowed to approve a deployment to this protected environment. The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}
  */
  readonly userId?: number;
}

export function groupProtectedEnvironmentApprovalRulesToTerraform(struct?: GroupProtectedEnvironmentApprovalRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_inheritance_type: cdktf.numberToTerraform(struct!.groupInheritanceType),
    required_approvals: cdktf.numberToTerraform(struct!.requiredApprovals),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function groupProtectedEnvironmentApprovalRulesToHclTerraform(struct?: GroupProtectedEnvironmentApprovalRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_inheritance_type: {
      value: cdktf.numberToHclTerraform(struct!.groupInheritanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_approvals: {
      value: cdktf.numberToHclTerraform(struct!.requiredApprovals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupProtectedEnvironmentApprovalRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupProtectedEnvironmentApprovalRules | cdktf.IResolvable | undefined {
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
    if (this._groupInheritanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInheritanceType = this._groupInheritanceType;
    }
    if (this._requiredApprovals !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredApprovals = this._requiredApprovals;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupProtectedEnvironmentApprovalRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._groupId = undefined;
      this._groupInheritanceType = undefined;
      this._requiredApprovals = undefined;
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
      this._groupInheritanceType = value.groupInheritanceType;
      this._requiredApprovals = value.requiredApprovals;
      this._userId = value.userId;
    }
  }

  // access_level - computed: true, optional: true, required: false
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

  // group_id - computed: true, optional: true, required: false
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

  // group_inheritance_type - computed: true, optional: true, required: false
  private _groupInheritanceType?: number; 
  public get groupInheritanceType() {
    return this.getNumberAttribute('group_inheritance_type');
  }
  public set groupInheritanceType(value: number) {
    this._groupInheritanceType = value;
  }
  public resetGroupInheritanceType() {
    this._groupInheritanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInheritanceTypeInput() {
    return this._groupInheritanceType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // required_approvals - computed: true, optional: true, required: false
  private _requiredApprovals?: number; 
  public get requiredApprovals() {
    return this.getNumberAttribute('required_approvals');
  }
  public set requiredApprovals(value: number) {
    this._requiredApprovals = value;
  }
  public resetRequiredApprovals() {
    this._requiredApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalsInput() {
    return this._requiredApprovals;
  }

  // user_id - computed: true, optional: true, required: false
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

export class GroupProtectedEnvironmentApprovalRulesList extends cdktf.ComplexList {
  public internalValue? : GroupProtectedEnvironmentApprovalRules[] | cdktf.IResolvable

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
  public get(index: number): GroupProtectedEnvironmentApprovalRulesOutputReference {
    return new GroupProtectedEnvironmentApprovalRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupProtectedEnvironmentDeployAccessLevels {
  /**
  * Levels of access required to deploy to this protected environment. Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The ID of the group allowed to deploy to this protected environment. The group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}
  */
  readonly groupId?: number;
  /**
  * Group inheritance allows deploy access levels to take inherited group membership into account. Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}
  */
  readonly groupInheritanceType?: number;
  /**
  * The ID of the user allowed to deploy to this protected environment. The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}
  */
  readonly userId?: number;
}

export function groupProtectedEnvironmentDeployAccessLevelsToTerraform(struct?: GroupProtectedEnvironmentDeployAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_inheritance_type: cdktf.numberToTerraform(struct!.groupInheritanceType),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function groupProtectedEnvironmentDeployAccessLevelsToHclTerraform(struct?: GroupProtectedEnvironmentDeployAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_inheritance_type: {
      value: cdktf.numberToHclTerraform(struct!.groupInheritanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupProtectedEnvironmentDeployAccessLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupProtectedEnvironmentDeployAccessLevels | cdktf.IResolvable | undefined {
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
    if (this._groupInheritanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInheritanceType = this._groupInheritanceType;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupProtectedEnvironmentDeployAccessLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._groupId = undefined;
      this._groupInheritanceType = undefined;
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
      this._groupInheritanceType = value.groupInheritanceType;
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

  // group_inheritance_type - computed: true, optional: true, required: false
  private _groupInheritanceType?: number; 
  public get groupInheritanceType() {
    return this.getNumberAttribute('group_inheritance_type');
  }
  public set groupInheritanceType(value: number) {
    this._groupInheritanceType = value;
  }
  public resetGroupInheritanceType() {
    this._groupInheritanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInheritanceTypeInput() {
    return this._groupInheritanceType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

export class GroupProtectedEnvironmentDeployAccessLevelsList extends cdktf.ComplexList {
  public internalValue? : GroupProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable

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
  public get(index: number): GroupProtectedEnvironmentDeployAccessLevelsOutputReference {
    return new GroupProtectedEnvironmentDeployAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment gitlab_group_protected_environment}
*/
export class GroupProtectedEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_protected_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupProtectedEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupProtectedEnvironment to import
  * @param importFromId The id of the existing GroupProtectedEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupProtectedEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_protected_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group_protected_environment gitlab_group_protected_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupProtectedEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: GroupProtectedEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_protected_environment',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.6.0',
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
    this._approvalRules.internalValue = config.approvalRules;
    this._deployAccessLevels.internalValue = config.deployAccessLevels;
    this._environment = config.environment;
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_rules - computed: true, optional: true, required: false
  private _approvalRules = new GroupProtectedEnvironmentApprovalRulesList(this, "approval_rules", true);
  public get approvalRules() {
    return this._approvalRules;
  }
  public putApprovalRules(value: GroupProtectedEnvironmentApprovalRules[] | cdktf.IResolvable) {
    this._approvalRules.internalValue = value;
  }
  public resetApprovalRules() {
    this._approvalRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRulesInput() {
    return this._approvalRules.internalValue;
  }

  // deploy_access_levels - computed: false, optional: false, required: true
  private _deployAccessLevels = new GroupProtectedEnvironmentDeployAccessLevelsList(this, "deploy_access_levels", true);
  public get deployAccessLevels() {
    return this._deployAccessLevels;
  }
  public putDeployAccessLevels(value: GroupProtectedEnvironmentDeployAccessLevels[] | cdktf.IResolvable) {
    this._deployAccessLevels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAccessLevelsInput() {
    return this._deployAccessLevels.internalValue;
  }

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

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_rules: cdktf.listMapper(groupProtectedEnvironmentApprovalRulesToTerraform, false)(this._approvalRules.internalValue),
      deploy_access_levels: cdktf.listMapper(groupProtectedEnvironmentDeployAccessLevelsToTerraform, false)(this._deployAccessLevels.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      group: cdktf.stringToTerraform(this._group),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_rules: {
        value: cdktf.listMapperHcl(groupProtectedEnvironmentApprovalRulesToHclTerraform, false)(this._approvalRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupProtectedEnvironmentApprovalRulesList",
      },
      deploy_access_levels: {
        value: cdktf.listMapperHcl(groupProtectedEnvironmentDeployAccessLevelsToHclTerraform, false)(this._deployAccessLevels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupProtectedEnvironmentDeployAccessLevelsList",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
