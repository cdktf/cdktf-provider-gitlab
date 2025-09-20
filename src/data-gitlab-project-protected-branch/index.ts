/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectProtectedBranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the protected branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#name DataGitlabProjectProtectedBranch#name}
  */
  readonly name: string;
  /**
  * The integer or path with namespace that uniquely identifies the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#project_id DataGitlabProjectProtectedBranch#project_id}
  */
  readonly projectId: string;
  /**
  * merge_access_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#merge_access_levels DataGitlabProjectProtectedBranch#merge_access_levels}
  */
  readonly mergeAccessLevels?: DataGitlabProjectProtectedBranchMergeAccessLevels[] | cdktf.IResolvable;
  /**
  * push_access_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#push_access_levels DataGitlabProjectProtectedBranch#push_access_levels}
  */
  readonly pushAccessLevels?: DataGitlabProjectProtectedBranchPushAccessLevels[] | cdktf.IResolvable;
}
export interface DataGitlabProjectProtectedBranchMergeAccessLevels {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#group_id DataGitlabProjectProtectedBranch#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#user_id DataGitlabProjectProtectedBranch#user_id}
  */
  readonly userId?: number;
}

export function dataGitlabProjectProtectedBranchMergeAccessLevelsToTerraform(struct?: DataGitlabProjectProtectedBranchMergeAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function dataGitlabProjectProtectedBranchMergeAccessLevelsToHclTerraform(struct?: DataGitlabProjectProtectedBranchMergeAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
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

export class DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectProtectedBranchMergeAccessLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataGitlabProjectProtectedBranchMergeAccessLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._groupId = value.groupId;
      this._userId = value.userId;
    }
  }

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getStringAttribute('access_level');
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

export class DataGitlabProjectProtectedBranchMergeAccessLevelsList extends cdktf.ComplexList {
  public internalValue? : DataGitlabProjectProtectedBranchMergeAccessLevels[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference {
    return new DataGitlabProjectProtectedBranchMergeAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectProtectedBranchPushAccessLevels {
  /**
  * The ID of a GitLab deploy key allowed to perform the relevant action. Mutually exclusive with `group_id` and `user_id`. This field is read-only until Gitlab 17.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#deploy_key_id DataGitlabProjectProtectedBranch#deploy_key_id}
  */
  readonly deployKeyId?: number;
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#group_id DataGitlabProjectProtectedBranch#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#user_id DataGitlabProjectProtectedBranch#user_id}
  */
  readonly userId?: number;
}

export function dataGitlabProjectProtectedBranchPushAccessLevelsToTerraform(struct?: DataGitlabProjectProtectedBranchPushAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_key_id: cdktf.numberToTerraform(struct!.deployKeyId),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function dataGitlabProjectProtectedBranchPushAccessLevelsToHclTerraform(struct?: DataGitlabProjectProtectedBranchPushAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_key_id: {
      value: cdktf.numberToHclTerraform(struct!.deployKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
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

export class DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectProtectedBranchPushAccessLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployKeyId = this._deployKeyId;
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

  public set internalValue(value: DataGitlabProjectProtectedBranchPushAccessLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployKeyId = undefined;
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
      this._deployKeyId = value.deployKeyId;
      this._groupId = value.groupId;
      this._userId = value.userId;
    }
  }

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }

  // access_level_description - computed: true, optional: false, required: false
  public get accessLevelDescription() {
    return this.getStringAttribute('access_level_description');
  }

  // deploy_key_id - computed: false, optional: true, required: false
  private _deployKeyId?: number; 
  public get deployKeyId() {
    return this.getNumberAttribute('deploy_key_id');
  }
  public set deployKeyId(value: number) {
    this._deployKeyId = value;
  }
  public resetDeployKeyId() {
    this._deployKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployKeyIdInput() {
    return this._deployKeyId;
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

export class DataGitlabProjectProtectedBranchPushAccessLevelsList extends cdktf.ComplexList {
  public internalValue? : DataGitlabProjectProtectedBranchPushAccessLevels[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference {
    return new DataGitlabProjectProtectedBranchPushAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch gitlab_project_protected_branch}
*/
export class DataGitlabProjectProtectedBranch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_protected_branch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectProtectedBranch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectProtectedBranch to import
  * @param importFromId The id of the existing DataGitlabProjectProtectedBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectProtectedBranch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_protected_branch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/data-sources/project_protected_branch gitlab_project_protected_branch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectProtectedBranchConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectProtectedBranchConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_protected_branch',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.4.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._projectId = config.projectId;
    this._mergeAccessLevels.internalValue = config.mergeAccessLevels;
    this._pushAccessLevels.internalValue = config.pushAccessLevels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_force_push - computed: true, optional: false, required: false
  public get allowForcePush() {
    return this.getBooleanAttribute('allow_force_push');
  }

  // code_owner_approval_required - computed: true, optional: false, required: false
  public get codeOwnerApprovalRequired() {
    return this.getBooleanAttribute('code_owner_approval_required');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // merge_access_levels - computed: false, optional: true, required: false
  private _mergeAccessLevels = new DataGitlabProjectProtectedBranchMergeAccessLevelsList(this, "merge_access_levels", true);
  public get mergeAccessLevels() {
    return this._mergeAccessLevels;
  }
  public putMergeAccessLevels(value: DataGitlabProjectProtectedBranchMergeAccessLevels[] | cdktf.IResolvable) {
    this._mergeAccessLevels.internalValue = value;
  }
  public resetMergeAccessLevels() {
    this._mergeAccessLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeAccessLevelsInput() {
    return this._mergeAccessLevels.internalValue;
  }

  // push_access_levels - computed: false, optional: true, required: false
  private _pushAccessLevels = new DataGitlabProjectProtectedBranchPushAccessLevelsList(this, "push_access_levels", true);
  public get pushAccessLevels() {
    return this._pushAccessLevels;
  }
  public putPushAccessLevels(value: DataGitlabProjectProtectedBranchPushAccessLevels[] | cdktf.IResolvable) {
    this._pushAccessLevels.internalValue = value;
  }
  public resetPushAccessLevels() {
    this._pushAccessLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushAccessLevelsInput() {
    return this._pushAccessLevels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      merge_access_levels: cdktf.listMapper(dataGitlabProjectProtectedBranchMergeAccessLevelsToTerraform, true)(this._mergeAccessLevels.internalValue),
      push_access_levels: cdktf.listMapper(dataGitlabProjectProtectedBranchPushAccessLevelsToTerraform, true)(this._pushAccessLevels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_access_levels: {
        value: cdktf.listMapperHcl(dataGitlabProjectProtectedBranchMergeAccessLevelsToHclTerraform, true)(this._mergeAccessLevels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGitlabProjectProtectedBranchMergeAccessLevelsList",
      },
      push_access_levels: {
        value: cdktf.listMapperHcl(dataGitlabProjectProtectedBranchPushAccessLevelsToHclTerraform, true)(this._pushAccessLevels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGitlabProjectProtectedBranchPushAccessLevelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
