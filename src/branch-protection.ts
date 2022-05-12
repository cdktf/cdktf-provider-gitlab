// https://www.terraform.io/docs/providers/gitlab/r/branch_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can be set to true to allow users with push access to force push.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#allow_force_push BranchProtection#allow_force_push}
  */
  readonly allowForcePush?: boolean | cdktf.IResolvable;
  /**
  * Name of the branch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#branch BranchProtection#branch}
  */
  readonly branch: string;
  /**
  * Can be set to true to require code owner approval before merging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}
  */
  readonly codeOwnerApprovalRequired?: boolean | cdktf.IResolvable;
  /**
  * Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#merge_access_level BranchProtection#merge_access_level}
  */
  readonly mergeAccessLevel?: string;
  /**
  * The id of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#project BranchProtection#project}
  */
  readonly project: string;
  /**
  * Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#push_access_level BranchProtection#push_access_level}
  */
  readonly pushAccessLevel?: string;
  /**
  * Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}
  */
  readonly unprotectAccessLevel?: string;
  /**
  * allowed_to_merge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}
  */
  readonly allowedToMerge?: BranchProtectionAllowedToMerge[] | cdktf.IResolvable;
  /**
  * allowed_to_push block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#allowed_to_push BranchProtection#allowed_to_push}
  */
  readonly allowedToPush?: BranchProtectionAllowedToPush[] | cdktf.IResolvable;
  /**
  * allowed_to_unprotect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}
  */
  readonly allowedToUnprotect?: BranchProtectionAllowedToUnprotect[] | cdktf.IResolvable;
}
export interface BranchProtectionAllowedToMerge {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#group_id BranchProtection#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#user_id BranchProtection#user_id}
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

export interface BranchProtectionAllowedToPush {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#group_id BranchProtection#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#user_id BranchProtection#user_id}
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

export interface BranchProtectionAllowedToUnprotect {
  /**
  * The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#group_id BranchProtection#group_id}
  */
  readonly groupId?: number;
  /**
  * The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection#user_id BranchProtection#user_id}
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection gitlab_branch_protection}
*/
export class BranchProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_branch_protection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/branch_protection gitlab_branch_protection} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowForcePush = config.allowForcePush;
    this._branch = config.branch;
    this._codeOwnerApprovalRequired = config.codeOwnerApprovalRequired;
    this._mergeAccessLevel = config.mergeAccessLevel;
    this._project = config.project;
    this._pushAccessLevel = config.pushAccessLevel;
    this._unprotectAccessLevel = config.unprotectAccessLevel;
    this._allowedToMerge = config.allowedToMerge;
    this._allowedToPush = config.allowedToPush;
    this._allowedToUnprotect = config.allowedToUnprotect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_force_push - computed: false, optional: true, required: false
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

  // code_owner_approval_required - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // merge_access_level - computed: false, optional: true, required: false
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

  // push_access_level - computed: false, optional: true, required: false
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

  // unprotect_access_level - computed: false, optional: true, required: false
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
  private _allowedToMerge?: BranchProtectionAllowedToMerge[] | cdktf.IResolvable; 
  public get allowedToMerge() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('allowed_to_merge')));
  }
  public set allowedToMerge(value: BranchProtectionAllowedToMerge[] | cdktf.IResolvable) {
    this._allowedToMerge = value;
  }
  public resetAllowedToMerge() {
    this._allowedToMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToMergeInput() {
    return this._allowedToMerge;
  }

  // allowed_to_push - computed: false, optional: true, required: false
  private _allowedToPush?: BranchProtectionAllowedToPush[] | cdktf.IResolvable; 
  public get allowedToPush() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('allowed_to_push')));
  }
  public set allowedToPush(value: BranchProtectionAllowedToPush[] | cdktf.IResolvable) {
    this._allowedToPush = value;
  }
  public resetAllowedToPush() {
    this._allowedToPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToPushInput() {
    return this._allowedToPush;
  }

  // allowed_to_unprotect - computed: false, optional: true, required: false
  private _allowedToUnprotect?: BranchProtectionAllowedToUnprotect[] | cdktf.IResolvable; 
  public get allowedToUnprotect() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('allowed_to_unprotect')));
  }
  public set allowedToUnprotect(value: BranchProtectionAllowedToUnprotect[] | cdktf.IResolvable) {
    this._allowedToUnprotect = value;
  }
  public resetAllowedToUnprotect() {
    this._allowedToUnprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToUnprotectInput() {
    return this._allowedToUnprotect;
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
      allowed_to_merge: cdktf.listMapper(branchProtectionAllowedToMergeToTerraform)(this._allowedToMerge),
      allowed_to_push: cdktf.listMapper(branchProtectionAllowedToPushToTerraform)(this._allowedToPush),
      allowed_to_unprotect: cdktf.listMapper(branchProtectionAllowedToUnprotectToTerraform)(this._allowedToUnprotect),
    };
  }
}
