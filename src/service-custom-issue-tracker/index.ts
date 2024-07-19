/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_custom_issue_tracker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceCustomIssueTrackerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL to view an issue in the external issue tracker. Must contain :id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_custom_issue_tracker#issues_url ServiceCustomIssueTracker#issues_url}
  */
  readonly issuesUrl: string;
  /**
  * The ID or full path of the project for the custom issue tracker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_custom_issue_tracker#project ServiceCustomIssueTracker#project}
  */
  readonly project: string;
  /**
  * The URL to the project in the external issue tracker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_custom_issue_tracker#project_url ServiceCustomIssueTracker#project_url}
  */
  readonly projectUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_custom_issue_tracker gitlab_service_custom_issue_tracker}
*/
export class ServiceCustomIssueTracker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_service_custom_issue_tracker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCustomIssueTracker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCustomIssueTracker to import
  * @param importFromId The id of the existing ServiceCustomIssueTracker that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_custom_issue_tracker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCustomIssueTracker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_service_custom_issue_tracker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_custom_issue_tracker gitlab_service_custom_issue_tracker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceCustomIssueTrackerConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceCustomIssueTrackerConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_service_custom_issue_tracker',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.2.0',
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
    this._issuesUrl = config.issuesUrl;
    this._project = config.project;
    this._projectUrl = config.projectUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issues_url - computed: false, optional: false, required: true
  private _issuesUrl?: string; 
  public get issuesUrl() {
    return this.getStringAttribute('issues_url');
  }
  public set issuesUrl(value: string) {
    this._issuesUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesUrlInput() {
    return this._issuesUrl;
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

  // project_url - computed: false, optional: false, required: true
  private _projectUrl?: string; 
  public get projectUrl() {
    return this.getStringAttribute('project_url');
  }
  public set projectUrl(value: string) {
    this._projectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectUrlInput() {
    return this._projectUrl;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
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
      issues_url: cdktf.stringToTerraform(this._issuesUrl),
      project: cdktf.stringToTerraform(this._project),
      project_url: cdktf.stringToTerraform(this._projectUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      issues_url: {
        value: cdktf.stringToHclTerraform(this._issuesUrl),
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
      project_url: {
        value: cdktf.stringToHclTerraform(this._projectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
