/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/project_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the project hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/project_hook#hook_id DataGitlabProjectHook#hook_id}
  */
  readonly hookId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/project_hook#id DataGitlabProjectHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name or id of the project to add the hook to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/project_hook#project DataGitlabProjectHook#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/project_hook gitlab_project_hook}
*/
export class DataGitlabProjectHook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectHook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectHook to import
  * @param importFromId The id of the existing DataGitlabProjectHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/project_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/data-sources/project_hook gitlab_project_hook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectHookConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectHookConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_hook',
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
    this._hookId = config.hookId;
    this._id = config.id;
    this._project = config.project;
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

  // custom_webhook_template - computed: true, optional: false, required: false
  public get customWebhookTemplate() {
    return this.getStringAttribute('custom_webhook_template');
  }

  // deployment_events - computed: true, optional: false, required: false
  public get deploymentEvents() {
    return this.getBooleanAttribute('deployment_events');
  }

  // enable_ssl_verification - computed: true, optional: false, required: false
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
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
      hook_id: cdktf.numberToTerraform(this._hookId),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hook_id: {
        value: cdktf.numberToHclTerraform(this._hookId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
