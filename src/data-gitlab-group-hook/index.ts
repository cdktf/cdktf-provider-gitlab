// https://www.terraform.io/docs/providers/gitlab/d/group_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or full path of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_hook#group DataGitlabGroupHook#group}
  */
  readonly group: string;
  /**
  * The id of the group hook.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_hook#hook_id DataGitlabGroupHook#hook_id}
  */
  readonly hookId: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/group_hook#id DataGitlabGroupHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/group_hook gitlab_group_hook}
*/
export class DataGitlabGroupHook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_hook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/group_hook gitlab_group_hook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabGroupHookConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabGroupHookConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_hook',
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
    this._group = config.group;
    this._hookId = config.hookId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // confidential_issues_events - computed: true, optional: false, required: false
  public get confidentialIssuesEvents() {
    return this.getBooleanAttribute('confidential_issues_events');
  }

  // confidential_note_events - computed: true, optional: false, required: false
  public get confidentialNoteEvents() {
    return this.getBooleanAttribute('confidential_note_events');
  }

  // deployment_events - computed: true, optional: false, required: false
  public get deploymentEvents() {
    return this.getBooleanAttribute('deployment_events');
  }

  // enable_ssl_verification - computed: true, optional: false, required: false
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // hook_id - computed: false, optional: false, required: true
  private _hookId?: number; 
  public get hookId() {
    return this.getNumberAttribute('hook_id');
  }
  public set hookId(value: number) {
    this._hookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hookIdInput() {
    return this._hookId;
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

  // issues_events - computed: true, optional: false, required: false
  public get issuesEvents() {
    return this.getBooleanAttribute('issues_events');
  }

  // job_events - computed: true, optional: false, required: false
  public get jobEvents() {
    return this.getBooleanAttribute('job_events');
  }

  // merge_requests_events - computed: true, optional: false, required: false
  public get mergeRequestsEvents() {
    return this.getBooleanAttribute('merge_requests_events');
  }

  // note_events - computed: true, optional: false, required: false
  public get noteEvents() {
    return this.getBooleanAttribute('note_events');
  }

  // pipeline_events - computed: true, optional: false, required: false
  public get pipelineEvents() {
    return this.getBooleanAttribute('pipeline_events');
  }

  // push_events - computed: true, optional: false, required: false
  public get pushEvents() {
    return this.getBooleanAttribute('push_events');
  }

  // push_events_branch_filter - computed: true, optional: false, required: false
  public get pushEventsBranchFilter() {
    return this.getStringAttribute('push_events_branch_filter');
  }

  // releases_events - computed: true, optional: false, required: false
  public get releasesEvents() {
    return this.getBooleanAttribute('releases_events');
  }

  // subgroup_events - computed: true, optional: false, required: false
  public get subgroupEvents() {
    return this.getBooleanAttribute('subgroup_events');
  }

  // tag_push_events - computed: true, optional: false, required: false
  public get tagPushEvents() {
    return this.getBooleanAttribute('tag_push_events');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // wiki_page_events - computed: true, optional: false, required: false
  public get wikiPageEvents() {
    return this.getBooleanAttribute('wiki_page_events');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      hook_id: cdktf.numberToTerraform(this._hookId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
