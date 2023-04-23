// https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectLevelMrApprovalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * By default, users are able to edit the approval rules in merge requests. If set to true,
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}
  */
  readonly disableOverridingApproversPerMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals#id ProjectLevelMrApprovals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to `true` if you want to allow merge request authors to self-approve merge requests. Authors
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}
  */
  readonly mergeRequestsAuthorApproval?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` if you want to prevent approval of merge requests by merge request committers.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}
  */
  readonly mergeRequestsDisableCommittersApproval?: boolean | cdktf.IResolvable;
  /**
  * The ID of the project to change MR approval configuration.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals#project_id ProjectLevelMrApprovals#project_id}
  */
  readonly projectId: number;
  /**
  * Set to `true` if you want to require authentication when approving a merge request.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}
  */
  readonly requirePasswordToApprove?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` if you want to remove all approvals in a merge request when new commits are pushed to its source branch. Default is `true`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}
  */
  readonly resetApprovalsOnPush?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals gitlab_project_level_mr_approvals}
*/
export class ProjectLevelMrApprovals extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_level_mr_approvals";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_level_mr_approvals gitlab_project_level_mr_approvals} Resource
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
        providerVersion: '15.11.0',
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
    this._disableOverridingApproversPerMergeRequest = config.disableOverridingApproversPerMergeRequest;
    this._id = config.id;
    this._mergeRequestsAuthorApproval = config.mergeRequestsAuthorApproval;
    this._mergeRequestsDisableCommittersApproval = config.mergeRequestsDisableCommittersApproval;
    this._projectId = config.projectId;
    this._requirePasswordToApprove = config.requirePasswordToApprove;
    this._resetApprovalsOnPush = config.resetApprovalsOnPush;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_overriding_approvers_per_merge_request - computed: false, optional: true, required: false
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

  // merge_requests_author_approval - computed: false, optional: true, required: false
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

  // merge_requests_disable_committers_approval - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // require_password_to_approve - computed: false, optional: true, required: false
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

  // reset_approvals_on_push - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_overriding_approvers_per_merge_request: cdktf.booleanToTerraform(this._disableOverridingApproversPerMergeRequest),
      id: cdktf.stringToTerraform(this._id),
      merge_requests_author_approval: cdktf.booleanToTerraform(this._mergeRequestsAuthorApproval),
      merge_requests_disable_committers_approval: cdktf.booleanToTerraform(this._mergeRequestsDisableCommittersApproval),
      project_id: cdktf.numberToTerraform(this._projectId),
      require_password_to_approve: cdktf.booleanToTerraform(this._requirePasswordToApprove),
      reset_approvals_on_push: cdktf.booleanToTerraform(this._resetApprovalsOnPush),
    };
  }
}
