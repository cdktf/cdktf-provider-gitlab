// https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.1/docs/resources/integration_custom_issue_tracker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationCustomIssueTrackerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL to view an issue in the external issue tracker. Must contain :id.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.1/docs/resources/integration_custom_issue_tracker#issues_url IntegrationCustomIssueTracker#issues_url}
  */
  readonly issuesUrl: string;
  /**
  * The ID or full path of the project for the custom issue tracker.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.1/docs/resources/integration_custom_issue_tracker#project IntegrationCustomIssueTracker#project}
  */
  readonly project: string;
  /**
  * The URL to the project in the external issue tracker.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.1/docs/resources/integration_custom_issue_tracker#project_url IntegrationCustomIssueTracker#project_url}
  */
  readonly projectUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.1/docs/resources/integration_custom_issue_tracker gitlab_integration_custom_issue_tracker}
*/
export class IntegrationCustomIssueTracker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_integration_custom_issue_tracker";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.1.1/docs/resources/integration_custom_issue_tracker gitlab_integration_custom_issue_tracker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationCustomIssueTrackerConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationCustomIssueTrackerConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_integration_custom_issue_tracker',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.1.1',
        providerVersionConstraint: '~> 16.0'
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
}
