/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectProtectedBranchesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The integer or path with namespace that uniquely identifies the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#project_id DataGitlabProjectProtectedBranches#project_id}
  */
  readonly projectId: string;
  /**
  * protected_branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#protected_branches DataGitlabProjectProtectedBranches#protected_branches}
  */
  readonly protectedBranches?: DataGitlabProjectProtectedBranchesProtectedBranches[] | cdktf.IResolvable;
}
export interface DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#group_id DataGitlabProjectProtectedBranches#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#user_id DataGitlabProjectProtectedBranches#user_id}
  */
  readonly userId?: number;
}

export function dataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsToTerraform(struct?: DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function dataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsToHclTerraform(struct?: DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels | cdktf.IResolvable): any {
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

export class DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels | cdktf.IResolvable | undefined) {
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

export class DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList extends cdktf.ComplexList {
  public internalValue? : DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference {
    return new DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels {
  /**
  * The ID of a GitLab deploy key allowed to perform the relevant action. Mutually exclusive with `group_id` and `user_id`. This field is read-only until Gitlab 17.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#deploy_key_id DataGitlabProjectProtectedBranches#deploy_key_id}
  */
  readonly deployKeyId?: number;
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#group_id DataGitlabProjectProtectedBranches#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#user_id DataGitlabProjectProtectedBranches#user_id}
  */
  readonly userId?: number;
}

export function dataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsToTerraform(struct?: DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels | cdktf.IResolvable): any {
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


export function dataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsToHclTerraform(struct?: DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels | cdktf.IResolvable): any {
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

export class DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels | cdktf.IResolvable | undefined) {
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

export class DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList extends cdktf.ComplexList {
  public internalValue? : DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference {
    return new DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectProtectedBranchesProtectedBranches {
  /**
  * merge_access_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#merge_access_levels DataGitlabProjectProtectedBranches#merge_access_levels}
  */
  readonly mergeAccessLevels?: DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels[] | cdktf.IResolvable;
  /**
  * push_access_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#push_access_levels DataGitlabProjectProtectedBranches#push_access_levels}
  */
  readonly pushAccessLevels?: DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels[] | cdktf.IResolvable;
}

export function dataGitlabProjectProtectedBranchesProtectedBranchesToTerraform(struct?: DataGitlabProjectProtectedBranchesProtectedBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    merge_access_levels: cdktf.listMapper(dataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsToTerraform, true)(struct!.mergeAccessLevels),
    push_access_levels: cdktf.listMapper(dataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsToTerraform, true)(struct!.pushAccessLevels),
  }
}


export function dataGitlabProjectProtectedBranchesProtectedBranchesToHclTerraform(struct?: DataGitlabProjectProtectedBranchesProtectedBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    merge_access_levels: {
      value: cdktf.listMapperHcl(dataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsToHclTerraform, true)(struct!.mergeAccessLevels),
      isBlock: true,
      type: "set",
      storageClassType: "DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList",
    },
    push_access_levels: {
      value: cdktf.listMapperHcl(dataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsToHclTerraform, true)(struct!.pushAccessLevels),
      isBlock: true,
      type: "set",
      storageClassType: "DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectProtectedBranchesProtectedBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mergeAccessLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeAccessLevels = this._mergeAccessLevels?.internalValue;
    }
    if (this._pushAccessLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushAccessLevels = this._pushAccessLevels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectProtectedBranchesProtectedBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mergeAccessLevels.internalValue = undefined;
      this._pushAccessLevels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mergeAccessLevels.internalValue = value.mergeAccessLevels;
      this._pushAccessLevels.internalValue = value.pushAccessLevels;
    }
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // merge_access_levels - computed: false, optional: true, required: false
  private _mergeAccessLevels = new DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList(this, "merge_access_levels", true);
  public get mergeAccessLevels() {
    return this._mergeAccessLevels;
  }
  public putMergeAccessLevels(value: DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels[] | cdktf.IResolvable) {
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
  private _pushAccessLevels = new DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList(this, "push_access_levels", true);
  public get pushAccessLevels() {
    return this._pushAccessLevels;
  }
  public putPushAccessLevels(value: DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels[] | cdktf.IResolvable) {
    this._pushAccessLevels.internalValue = value;
  }
  public resetPushAccessLevels() {
    this._pushAccessLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushAccessLevelsInput() {
    return this._pushAccessLevels.internalValue;
  }
}

export class DataGitlabProjectProtectedBranchesProtectedBranchesList extends cdktf.ComplexList {
  public internalValue? : DataGitlabProjectProtectedBranchesProtectedBranches[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference {
    return new DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches gitlab_project_protected_branches}
*/
export class DataGitlabProjectProtectedBranches extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_protected_branches";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectProtectedBranches resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectProtectedBranches to import
  * @param importFromId The id of the existing DataGitlabProjectProtectedBranches that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectProtectedBranches to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_protected_branches", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/data-sources/project_protected_branches gitlab_project_protected_branches} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectProtectedBranchesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectProtectedBranchesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_protected_branches',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.8.0',
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
    this._projectId = config.projectId;
    this._protectedBranches.internalValue = config.protectedBranches;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // protected_branches - computed: false, optional: true, required: false
  private _protectedBranches = new DataGitlabProjectProtectedBranchesProtectedBranchesList(this, "protected_branches", false);
  public get protectedBranches() {
    return this._protectedBranches;
  }
  public putProtectedBranches(value: DataGitlabProjectProtectedBranchesProtectedBranches[] | cdktf.IResolvable) {
    this._protectedBranches.internalValue = value;
  }
  public resetProtectedBranches() {
    this._protectedBranches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchesInput() {
    return this._protectedBranches.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      protected_branches: cdktf.listMapper(dataGitlabProjectProtectedBranchesProtectedBranchesToTerraform, true)(this._protectedBranches.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_branches: {
        value: cdktf.listMapperHcl(dataGitlabProjectProtectedBranchesProtectedBranchesToHclTerraform, true)(this._protectedBranches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGitlabProjectProtectedBranchesProtectedBranchesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
