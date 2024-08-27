/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectLevelMrApprovalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to `true` to disable overriding approvers per merge request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}
  */
  readonly disableOverridingApproversPerMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to allow merge requests authors to approve their own merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}
  */
  readonly mergeRequestsAuthorApproval?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to disable merge request committers from approving their own merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}
  */
  readonly mergeRequestsDisableCommittersApproval?: boolean | cdktf.IResolvable;
  /**
  * The ID or URL-encoded path of a project to change MR approval configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#project ProjectLevelMrApprovals#project}
  */
  readonly project: string;
  /**
  * Set to `true` to require authentication to approve merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}
  */
  readonly requirePasswordToApprove?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}
  */
  readonly resetApprovalsOnPush?: boolean | cdktf.IResolvable;
  /**
  * Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#selective_code_owner_removals ProjectLevelMrApprovals#selective_code_owner_removals}
  */
  readonly selectiveCodeOwnerRemovals?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals gitlab_project_level_mr_approvals}
*/
export class ProjectLevelMrApprovals extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_level_mr_approvals";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectLevelMrApprovals resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectLevelMrApprovals to import
  * @param importFromId The id of the existing ProjectLevelMrApprovals that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectLevelMrApprovals to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_level_mr_approvals", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals gitlab_project_level_mr_approvals} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectLevelMrApprovalsConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectLevelMrApprovalsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_level_mr_approvals',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.3.0',
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
    this._disableOverridingApproversPerMergeRequest = config.disableOverridingApproversPerMergeRequest;
    this._mergeRequestsAuthorApproval = config.mergeRequestsAuthorApproval;
    this._mergeRequestsDisableCommittersApproval = config.mergeRequestsDisableCommittersApproval;
    this._project = config.project;
    this._requirePasswordToApprove = config.requirePasswordToApprove;
    this._resetApprovalsOnPush = config.resetApprovalsOnPush;
    this._selectiveCodeOwnerRemovals = config.selectiveCodeOwnerRemovals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_overriding_approvers_per_merge_request - computed: true, optional: true, required: false
  private _disableOverridingApproversPerMergeRequest?: boolean | cdktf.IResolvable; 
  public get disableOverridingApproversPerMergeRequest() {
    return this.getBooleanAttribute('disable_overriding_approvers_per_merge_request');
  }
  public set disableOverridingApproversPerMergeRequest(value: boolean | cdktf.IResolvable) {
    this._disableOverridingApproversPerMergeRequest = value;
  }
  public resetDisableOverridingApproversPerMergeRequest() {
    this._disableOverridingApproversPerMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverridingApproversPerMergeRequestInput() {
    return this._disableOverridingApproversPerMergeRequest;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // merge_requests_author_approval - computed: true, optional: true, required: false
  private _mergeRequestsAuthorApproval?: boolean | cdktf.IResolvable; 
  public get mergeRequestsAuthorApproval() {
    return this.getBooleanAttribute('merge_requests_author_approval');
  }
  public set mergeRequestsAuthorApproval(value: boolean | cdktf.IResolvable) {
    this._mergeRequestsAuthorApproval = value;
  }
  public resetMergeRequestsAuthorApproval() {
    this._mergeRequestsAuthorApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsAuthorApprovalInput() {
    return this._mergeRequestsAuthorApproval;
  }

  // merge_requests_disable_committers_approval - computed: true, optional: true, required: false
  private _mergeRequestsDisableCommittersApproval?: boolean | cdktf.IResolvable; 
  public get mergeRequestsDisableCommittersApproval() {
    return this.getBooleanAttribute('merge_requests_disable_committers_approval');
  }
  public set mergeRequestsDisableCommittersApproval(value: boolean | cdktf.IResolvable) {
    this._mergeRequestsDisableCommittersApproval = value;
  }
  public resetMergeRequestsDisableCommittersApproval() {
    this._mergeRequestsDisableCommittersApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsDisableCommittersApprovalInput() {
    return this._mergeRequestsDisableCommittersApproval;
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

  // require_password_to_approve - computed: true, optional: true, required: false
  private _requirePasswordToApprove?: boolean | cdktf.IResolvable; 
  public get requirePasswordToApprove() {
    return this.getBooleanAttribute('require_password_to_approve');
  }
  public set requirePasswordToApprove(value: boolean | cdktf.IResolvable) {
    this._requirePasswordToApprove = value;
  }
  public resetRequirePasswordToApprove() {
    this._requirePasswordToApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePasswordToApproveInput() {
    return this._requirePasswordToApprove;
  }

  // reset_approvals_on_push - computed: true, optional: true, required: false
  private _resetApprovalsOnPush?: boolean | cdktf.IResolvable; 
  public get resetApprovalsOnPush() {
    return this.getBooleanAttribute('reset_approvals_on_push');
  }
  public set resetApprovalsOnPush(value: boolean | cdktf.IResolvable) {
    this._resetApprovalsOnPush = value;
  }
  public resetResetApprovalsOnPush() {
    this._resetApprovalsOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetApprovalsOnPushInput() {
    return this._resetApprovalsOnPush;
  }

  // selective_code_owner_removals - computed: true, optional: true, required: false
  private _selectiveCodeOwnerRemovals?: boolean | cdktf.IResolvable; 
  public get selectiveCodeOwnerRemovals() {
    return this.getBooleanAttribute('selective_code_owner_removals');
  }
  public set selectiveCodeOwnerRemovals(value: boolean | cdktf.IResolvable) {
    this._selectiveCodeOwnerRemovals = value;
  }
  public resetSelectiveCodeOwnerRemovals() {
    this._selectiveCodeOwnerRemovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveCodeOwnerRemovalsInput() {
    return this._selectiveCodeOwnerRemovals;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_overriding_approvers_per_merge_request: cdktf.booleanToTerraform(this._disableOverridingApproversPerMergeRequest),
      merge_requests_author_approval: cdktf.booleanToTerraform(this._mergeRequestsAuthorApproval),
      merge_requests_disable_committers_approval: cdktf.booleanToTerraform(this._mergeRequestsDisableCommittersApproval),
      project: cdktf.stringToTerraform(this._project),
      require_password_to_approve: cdktf.booleanToTerraform(this._requirePasswordToApprove),
      reset_approvals_on_push: cdktf.booleanToTerraform(this._resetApprovalsOnPush),
      selective_code_owner_removals: cdktf.booleanToTerraform(this._selectiveCodeOwnerRemovals),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_overriding_approvers_per_merge_request: {
        value: cdktf.booleanToHclTerraform(this._disableOverridingApproversPerMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_requests_author_approval: {
        value: cdktf.booleanToHclTerraform(this._mergeRequestsAuthorApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_requests_disable_committers_approval: {
        value: cdktf.booleanToHclTerraform(this._mergeRequestsDisableCommittersApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_password_to_approve: {
        value: cdktf.booleanToHclTerraform(this._requirePasswordToApprove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reset_approvals_on_push: {
        value: cdktf.booleanToHclTerraform(this._resetApprovalsOnPush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selective_code_owner_removals: {
        value: cdktf.booleanToHclTerraform(this._selectiveCodeOwnerRemovals),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
