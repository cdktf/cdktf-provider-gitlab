/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceEmailsOnPushConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#branches_to_be_notified ServiceEmailsOnPush#branches_to_be_notified}
  */
  readonly branchesToBeNotified?: string;
  /**
  * Disable code diffs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#disable_diffs ServiceEmailsOnPush#disable_diffs}
  */
  readonly disableDiffs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID or full-path of the project you want to activate integration on.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#project ServiceEmailsOnPush#project}
  */
  readonly project: string;
  /**
  * Enable notifications for push events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#push_events ServiceEmailsOnPush#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Emails separated by whitespace.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#recipients ServiceEmailsOnPush#recipients}
  */
  readonly recipients: string;
  /**
  * Send from committer.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#send_from_committer_email ServiceEmailsOnPush#send_from_committer_email}
  */
  readonly sendFromCommitterEmail?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for tag push events.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push#tag_push_events ServiceEmailsOnPush#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push gitlab_service_emails_on_push}
*/
export class ServiceEmailsOnPush extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_service_emails_on_push";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/service_emails_on_push gitlab_service_emails_on_push} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceEmailsOnPushConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceEmailsOnPushConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_service_emails_on_push',
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
    this._branchesToBeNotified = config.branchesToBeNotified;
    this._disableDiffs = config.disableDiffs;
    this._id = config.id;
    this._project = config.project;
    this._pushEvents = config.pushEvents;
    this._recipients = config.recipients;
    this._sendFromCommitterEmail = config.sendFromCommitterEmail;
    this._tagPushEvents = config.tagPushEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // branches_to_be_notified - computed: false, optional: true, required: false
  private _branchesToBeNotified?: string; 
  public get branchesToBeNotified() {
    return this.getStringAttribute('branches_to_be_notified');
  }
  public set branchesToBeNotified(value: string) {
    this._branchesToBeNotified = value;
  }
  public resetBranchesToBeNotified() {
    this._branchesToBeNotified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesToBeNotifiedInput() {
    return this._branchesToBeNotified;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disable_diffs - computed: false, optional: true, required: false
  private _disableDiffs?: boolean | cdktf.IResolvable; 
  public get disableDiffs() {
    return this.getBooleanAttribute('disable_diffs');
  }
  public set disableDiffs(value: boolean | cdktf.IResolvable) {
    this._disableDiffs = value;
  }
  public resetDisableDiffs() {
    this._disableDiffs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDiffsInput() {
    return this._disableDiffs;
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

  // push_events - computed: false, optional: true, required: false
  private _pushEvents?: boolean | cdktf.IResolvable; 
  public get pushEvents() {
    return this.getBooleanAttribute('push_events');
  }
  public set pushEvents(value: boolean | cdktf.IResolvable) {
    this._pushEvents = value;
  }
  public resetPushEvents() {
    this._pushEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEventsInput() {
    return this._pushEvents;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string; 
  public get recipients() {
    return this.getStringAttribute('recipients');
  }
  public set recipients(value: string) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // send_from_committer_email - computed: false, optional: true, required: false
  private _sendFromCommitterEmail?: boolean | cdktf.IResolvable; 
  public get sendFromCommitterEmail() {
    return this.getBooleanAttribute('send_from_committer_email');
  }
  public set sendFromCommitterEmail(value: boolean | cdktf.IResolvable) {
    this._sendFromCommitterEmail = value;
  }
  public resetSendFromCommitterEmail() {
    this._sendFromCommitterEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendFromCommitterEmailInput() {
    return this._sendFromCommitterEmail;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // tag_push_events - computed: false, optional: true, required: false
  private _tagPushEvents?: boolean | cdktf.IResolvable; 
  public get tagPushEvents() {
    return this.getBooleanAttribute('tag_push_events');
  }
  public set tagPushEvents(value: boolean | cdktf.IResolvable) {
    this._tagPushEvents = value;
  }
  public resetTagPushEvents() {
    this._tagPushEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPushEventsInput() {
    return this._tagPushEvents;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branches_to_be_notified: cdktf.stringToTerraform(this._branchesToBeNotified),
      disable_diffs: cdktf.booleanToTerraform(this._disableDiffs),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      recipients: cdktf.stringToTerraform(this._recipients),
      send_from_committer_email: cdktf.booleanToTerraform(this._sendFromCommitterEmail),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
    };
  }
}
