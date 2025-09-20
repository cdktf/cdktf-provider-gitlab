/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupLevelMrApprovalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow or prevent authors from self approving merge requests; `true` means authors can self approve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}
  */
  readonly allowAuthorApproval?: boolean | cdktf.IResolvable;
  /**
  * Allow or prevent committers from self approving merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}
  */
  readonly allowCommitterApproval?: boolean | cdktf.IResolvable;
  /**
  * Allow or prevent overriding approvers per merge request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}
  */
  readonly allowOverridesToApproverListPerMergeRequest?: boolean | cdktf.IResolvable;
  /**
  * The ID or URL-encoded path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}
  */
  readonly group: string;
  /**
  * Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. You will need to apply the resource with the new setting before destroying the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}
  */
  readonly keepSettingsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Require approver to authenticate before adding the approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}
  */
  readonly requireReauthenticationToApprove?: boolean | cdktf.IResolvable;
  /**
  * Retain approval count on a new push.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}
  */
  readonly retainApprovalsOnPush?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals gitlab_group_level_mr_approvals}
*/
export class GroupLevelMrApprovals extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_level_mr_approvals";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupLevelMrApprovals to import
  * @param importFromId The id of the existing GroupLevelMrApprovals that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupLevelMrApprovals to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_level_mr_approvals", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals gitlab_group_level_mr_approvals} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupLevelMrApprovalsConfig
  */
  public constructor(scope: Construct, id: string, config: GroupLevelMrApprovalsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_level_mr_approvals',
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
    this._allowAuthorApproval = config.allowAuthorApproval;
    this._allowCommitterApproval = config.allowCommitterApproval;
    this._allowOverridesToApproverListPerMergeRequest = config.allowOverridesToApproverListPerMergeRequest;
    this._group = config.group;
    this._keepSettingsOnDestroy = config.keepSettingsOnDestroy;
    this._requireReauthenticationToApprove = config.requireReauthenticationToApprove;
    this._retainApprovalsOnPush = config.retainApprovalsOnPush;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_author_approval - computed: true, optional: true, required: false
  private _allowAuthorApproval?: boolean | cdktf.IResolvable; 
  public get allowAuthorApproval() {
    return this.getBooleanAttribute('allow_author_approval');
  }
  public set allowAuthorApproval(value: boolean | cdktf.IResolvable) {
    this._allowAuthorApproval = value;
  }
  public resetAllowAuthorApproval() {
    this._allowAuthorApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthorApprovalInput() {
    return this._allowAuthorApproval;
  }

  // allow_committer_approval - computed: true, optional: true, required: false
  private _allowCommitterApproval?: boolean | cdktf.IResolvable; 
  public get allowCommitterApproval() {
    return this.getBooleanAttribute('allow_committer_approval');
  }
  public set allowCommitterApproval(value: boolean | cdktf.IResolvable) {
    this._allowCommitterApproval = value;
  }
  public resetAllowCommitterApproval() {
    this._allowCommitterApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCommitterApprovalInput() {
    return this._allowCommitterApproval;
  }

  // allow_overrides_to_approver_list_per_merge_request - computed: true, optional: true, required: false
  private _allowOverridesToApproverListPerMergeRequest?: boolean | cdktf.IResolvable; 
  public get allowOverridesToApproverListPerMergeRequest() {
    return this.getBooleanAttribute('allow_overrides_to_approver_list_per_merge_request');
  }
  public set allowOverridesToApproverListPerMergeRequest(value: boolean | cdktf.IResolvable) {
    this._allowOverridesToApproverListPerMergeRequest = value;
  }
  public resetAllowOverridesToApproverListPerMergeRequest() {
    this._allowOverridesToApproverListPerMergeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverridesToApproverListPerMergeRequestInput() {
    return this._allowOverridesToApproverListPerMergeRequest;
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

  // keep_settings_on_destroy - computed: true, optional: true, required: false
  private _keepSettingsOnDestroy?: boolean | cdktf.IResolvable; 
  public get keepSettingsOnDestroy() {
    return this.getBooleanAttribute('keep_settings_on_destroy');
  }
  public set keepSettingsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._keepSettingsOnDestroy = value;
  }
  public resetKeepSettingsOnDestroy() {
    this._keepSettingsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSettingsOnDestroyInput() {
    return this._keepSettingsOnDestroy;
  }

  // require_reauthentication_to_approve - computed: true, optional: true, required: false
  private _requireReauthenticationToApprove?: boolean | cdktf.IResolvable; 
  public get requireReauthenticationToApprove() {
    return this.getBooleanAttribute('require_reauthentication_to_approve');
  }
  public set requireReauthenticationToApprove(value: boolean | cdktf.IResolvable) {
    this._requireReauthenticationToApprove = value;
  }
  public resetRequireReauthenticationToApprove() {
    this._requireReauthenticationToApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireReauthenticationToApproveInput() {
    return this._requireReauthenticationToApprove;
  }

  // retain_approvals_on_push - computed: true, optional: true, required: false
  private _retainApprovalsOnPush?: boolean | cdktf.IResolvable; 
  public get retainApprovalsOnPush() {
    return this.getBooleanAttribute('retain_approvals_on_push');
  }
  public set retainApprovalsOnPush(value: boolean | cdktf.IResolvable) {
    this._retainApprovalsOnPush = value;
  }
  public resetRetainApprovalsOnPush() {
    this._retainApprovalsOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainApprovalsOnPushInput() {
    return this._retainApprovalsOnPush;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_author_approval: cdktf.booleanToTerraform(this._allowAuthorApproval),
      allow_committer_approval: cdktf.booleanToTerraform(this._allowCommitterApproval),
      allow_overrides_to_approver_list_per_merge_request: cdktf.booleanToTerraform(this._allowOverridesToApproverListPerMergeRequest),
      group: cdktf.stringToTerraform(this._group),
      keep_settings_on_destroy: cdktf.booleanToTerraform(this._keepSettingsOnDestroy),
      require_reauthentication_to_approve: cdktf.booleanToTerraform(this._requireReauthenticationToApprove),
      retain_approvals_on_push: cdktf.booleanToTerraform(this._retainApprovalsOnPush),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_author_approval: {
        value: cdktf.booleanToHclTerraform(this._allowAuthorApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_committer_approval: {
        value: cdktf.booleanToHclTerraform(this._allowCommitterApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_overrides_to_approver_list_per_merge_request: {
        value: cdktf.booleanToHclTerraform(this._allowOverridesToApproverListPerMergeRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_settings_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._keepSettingsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_reauthentication_to_approve: {
        value: cdktf.booleanToHclTerraform(this._requireReauthenticationToApprove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retain_approvals_on_push: {
        value: cdktf.booleanToHclTerraform(this._retainApprovalsOnPush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
