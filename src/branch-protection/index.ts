// https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can be set to true to allow users with push access to force push.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}
  */
  readonly allowForcePush?: boolean | cdktf.IResolvable;
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#branch BranchProtection#branch}
  */
  readonly branch: string;
  /**
  * Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}
  */
  readonly codeOwnerApprovalRequired?: boolean | cdktf.IResolvable;
  /**
  * Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}
  */
  readonly mergeAccessLevel?: string;
  /**
  * The id of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#project BranchProtection#project}
  */
  readonly project: string;
  /**
  * Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}
  */
  readonly pushAccessLevel?: string;
  /**
  * Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}
  */
  readonly unprotectAccessLevel?: string;
  /**
  * allowed_to_merge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}
  */
  readonly allowedToMerge?: BranchProtectionAllowedToMerge[] | cdktf.IResolvable;
  /**
  * allowed_to_push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}
  */
  readonly allowedToPush?: BranchProtectionAllowedToPush[] | cdktf.IResolvable;
  /**
  * allowed_to_unprotect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}
  */
  readonly allowedToUnprotect?: BranchProtectionAllowedToUnprotect[] | cdktf.IResolvable;
}
export interface BranchProtectionAllowedToMerge {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#group_id BranchProtection#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#user_id BranchProtection#user_id}
  */
  readonly userId?: number;
}

export function branchProtectionAllowedToMergeToTerraform(struct?: BranchProtectionAllowedToMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function branchProtectionAllowedToMergeToHclTerraform(struct?: BranchProtectionAllowedToMerge | cdktf.IResolvable): any {
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

export class BranchProtectionAllowedToMergeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchProtectionAllowedToMerge | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchProtectionAllowedToMerge | cdktf.IResolvable | undefined) {
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

export class BranchProtectionAllowedToMergeList extends cdktf.ComplexList {
  public internalValue? : BranchProtectionAllowedToMerge[] | cdktf.IResolvable

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
  public get(index: number): BranchProtectionAllowedToMergeOutputReference {
    return new BranchProtectionAllowedToMergeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchProtectionAllowedToPush {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#group_id BranchProtection#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#user_id BranchProtection#user_id}
  */
  readonly userId?: number;
}

export function branchProtectionAllowedToPushToTerraform(struct?: BranchProtectionAllowedToPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function branchProtectionAllowedToPushToHclTerraform(struct?: BranchProtectionAllowedToPush | cdktf.IResolvable): any {
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

export class BranchProtectionAllowedToPushOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchProtectionAllowedToPush | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchProtectionAllowedToPush | cdktf.IResolvable | undefined) {
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

export class BranchProtectionAllowedToPushList extends cdktf.ComplexList {
  public internalValue? : BranchProtectionAllowedToPush[] | cdktf.IResolvable

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
  public get(index: number): BranchProtectionAllowedToPushOutputReference {
    return new BranchProtectionAllowedToPushOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchProtectionAllowedToUnprotect {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#group_id BranchProtection#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#user_id BranchProtection#user_id}
  */
  readonly userId?: number;
}

export function branchProtectionAllowedToUnprotectToTerraform(struct?: BranchProtectionAllowedToUnprotect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function branchProtectionAllowedToUnprotectToHclTerraform(struct?: BranchProtectionAllowedToUnprotect | cdktf.IResolvable): any {
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

export class BranchProtectionAllowedToUnprotectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchProtectionAllowedToUnprotect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchProtectionAllowedToUnprotect | cdktf.IResolvable | undefined) {
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

export class BranchProtectionAllowedToUnprotectList extends cdktf.ComplexList {
  public internalValue? : BranchProtectionAllowedToUnprotect[] | cdktf.IResolvable

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
  public get(index: number): BranchProtectionAllowedToUnprotectOutputReference {
    return new BranchProtectionAllowedToUnprotectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection gitlab_branch_protection}
*/
export class BranchProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_branch_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchProtection to import
  * @param importFromId The id of the existing BranchProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_branch_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/branch_protection gitlab_branch_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: BranchProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_branch_protection',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.3.1',
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
    this._allowForcePush = config.allowForcePush;
    this._branch = config.branch;
    this._codeOwnerApprovalRequired = config.codeOwnerApprovalRequired;
    this._mergeAccessLevel = config.mergeAccessLevel;
    this._project = config.project;
    this._pushAccessLevel = config.pushAccessLevel;
    this._unprotectAccessLevel = config.unprotectAccessLevel;
    this._allowedToMerge.internalValue = config.allowedToMerge;
    this._allowedToPush.internalValue = config.allowedToPush;
    this._allowedToUnprotect.internalValue = config.allowedToUnprotect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_force_push - computed: true, optional: true, required: false
  private _allowForcePush?: boolean | cdktf.IResolvable; 
  public get allowForcePush() {
    return this.getBooleanAttribute('allow_force_push');
  }
  public set allowForcePush(value: boolean | cdktf.IResolvable) {
    this._allowForcePush = value;
  }
  public resetAllowForcePush() {
    this._allowForcePush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForcePushInput() {
    return this._allowForcePush;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // branch_protection_id - computed: true, optional: false, required: false
  public get branchProtectionId() {
    return this.getNumberAttribute('branch_protection_id');
  }

  // code_owner_approval_required - computed: true, optional: true, required: false
  private _codeOwnerApprovalRequired?: boolean | cdktf.IResolvable; 
  public get codeOwnerApprovalRequired() {
    return this.getBooleanAttribute('code_owner_approval_required');
  }
  public set codeOwnerApprovalRequired(value: boolean | cdktf.IResolvable) {
    this._codeOwnerApprovalRequired = value;
  }
  public resetCodeOwnerApprovalRequired() {
    this._codeOwnerApprovalRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeOwnerApprovalRequiredInput() {
    return this._codeOwnerApprovalRequired;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // merge_access_level - computed: true, optional: true, required: false
  private _mergeAccessLevel?: string; 
  public get mergeAccessLevel() {
    return this.getStringAttribute('merge_access_level');
  }
  public set mergeAccessLevel(value: string) {
    this._mergeAccessLevel = value;
  }
  public resetMergeAccessLevel() {
    this._mergeAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeAccessLevelInput() {
    return this._mergeAccessLevel;
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

  // push_access_level - computed: true, optional: true, required: false
  private _pushAccessLevel?: string; 
  public get pushAccessLevel() {
    return this.getStringAttribute('push_access_level');
  }
  public set pushAccessLevel(value: string) {
    this._pushAccessLevel = value;
  }
  public resetPushAccessLevel() {
    this._pushAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushAccessLevelInput() {
    return this._pushAccessLevel;
  }

  // unprotect_access_level - computed: true, optional: true, required: false
  private _unprotectAccessLevel?: string; 
  public get unprotectAccessLevel() {
    return this.getStringAttribute('unprotect_access_level');
  }
  public set unprotectAccessLevel(value: string) {
    this._unprotectAccessLevel = value;
  }
  public resetUnprotectAccessLevel() {
    this._unprotectAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprotectAccessLevelInput() {
    return this._unprotectAccessLevel;
  }

  // allowed_to_merge - computed: false, optional: true, required: false
  private _allowedToMerge = new BranchProtectionAllowedToMergeList(this, "allowed_to_merge", true);
  public get allowedToMerge() {
    return this._allowedToMerge;
  }
  public putAllowedToMerge(value: BranchProtectionAllowedToMerge[] | cdktf.IResolvable) {
    this._allowedToMerge.internalValue = value;
  }
  public resetAllowedToMerge() {
    this._allowedToMerge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToMergeInput() {
    return this._allowedToMerge.internalValue;
  }

  // allowed_to_push - computed: false, optional: true, required: false
  private _allowedToPush = new BranchProtectionAllowedToPushList(this, "allowed_to_push", true);
  public get allowedToPush() {
    return this._allowedToPush;
  }
  public putAllowedToPush(value: BranchProtectionAllowedToPush[] | cdktf.IResolvable) {
    this._allowedToPush.internalValue = value;
  }
  public resetAllowedToPush() {
    this._allowedToPush.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToPushInput() {
    return this._allowedToPush.internalValue;
  }

  // allowed_to_unprotect - computed: false, optional: true, required: false
  private _allowedToUnprotect = new BranchProtectionAllowedToUnprotectList(this, "allowed_to_unprotect", true);
  public get allowedToUnprotect() {
    return this._allowedToUnprotect;
  }
  public putAllowedToUnprotect(value: BranchProtectionAllowedToUnprotect[] | cdktf.IResolvable) {
    this._allowedToUnprotect.internalValue = value;
  }
  public resetAllowedToUnprotect() {
    this._allowedToUnprotect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToUnprotectInput() {
    return this._allowedToUnprotect.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_force_push: cdktf.booleanToTerraform(this._allowForcePush),
      branch: cdktf.stringToTerraform(this._branch),
      code_owner_approval_required: cdktf.booleanToTerraform(this._codeOwnerApprovalRequired),
      merge_access_level: cdktf.stringToTerraform(this._mergeAccessLevel),
      project: cdktf.stringToTerraform(this._project),
      push_access_level: cdktf.stringToTerraform(this._pushAccessLevel),
      unprotect_access_level: cdktf.stringToTerraform(this._unprotectAccessLevel),
      allowed_to_merge: cdktf.listMapper(branchProtectionAllowedToMergeToTerraform, true)(this._allowedToMerge.internalValue),
      allowed_to_push: cdktf.listMapper(branchProtectionAllowedToPushToTerraform, true)(this._allowedToPush.internalValue),
      allowed_to_unprotect: cdktf.listMapper(branchProtectionAllowedToUnprotectToTerraform, true)(this._allowedToUnprotect.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_force_push: {
        value: cdktf.booleanToHclTerraform(this._allowForcePush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_owner_approval_required: {
        value: cdktf.booleanToHclTerraform(this._codeOwnerApprovalRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_access_level: {
        value: cdktf.stringToHclTerraform(this._mergeAccessLevel),
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
      push_access_level: {
        value: cdktf.stringToHclTerraform(this._pushAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unprotect_access_level: {
        value: cdktf.stringToHclTerraform(this._unprotectAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_to_merge: {
        value: cdktf.listMapperHcl(branchProtectionAllowedToMergeToHclTerraform, true)(this._allowedToMerge.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BranchProtectionAllowedToMergeList",
      },
      allowed_to_push: {
        value: cdktf.listMapperHcl(branchProtectionAllowedToPushToHclTerraform, true)(this._allowedToPush.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BranchProtectionAllowedToPushList",
      },
      allowed_to_unprotect: {
        value: cdktf.listMapperHcl(branchProtectionAllowedToUnprotectToHclTerraform, true)(this._allowedToUnprotect.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BranchProtectionAllowedToUnprotectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
