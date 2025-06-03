/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationRedmineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL to the Redmine project issue to link to this GitLab project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine#issues_url IntegrationRedmine#issues_url}
  */
  readonly issuesUrl: string;
  /**
  * The URL to use to create a new issue in the Redmine project linked to this GitLab project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine#new_issue_url IntegrationRedmine#new_issue_url}
  */
  readonly newIssueUrl: string;
  /**
  * ID of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine#project IntegrationRedmine#project}
  */
  readonly project: string;
  /**
  * The URL to the Redmine project to link to this GitLab project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine#project_url IntegrationRedmine#project_url}
  */
  readonly projectUrl: string;
  /**
  * Indicates whether or not to inherit default settings. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine#use_inherited_settings IntegrationRedmine#use_inherited_settings}
  */
  readonly useInheritedSettings?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine gitlab_integration_redmine}
*/
export class IntegrationRedmine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_integration_redmine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationRedmine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationRedmine to import
  * @param importFromId The id of the existing IntegrationRedmine that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationRedmine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_integration_redmine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/integration_redmine gitlab_integration_redmine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationRedmineConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationRedmineConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_integration_redmine',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.0.0',
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
    this._issuesUrl = config.issuesUrl;
    this._newIssueUrl = config.newIssueUrl;
    this._project = config.project;
    this._projectUrl = config.projectUrl;
    this._useInheritedSettings = config.useInheritedSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // new_issue_url - computed: false, optional: false, required: true
  private _newIssueUrl?: string; 
  public get newIssueUrl() {
    return this.getStringAttribute('new_issue_url');
  }
  public set newIssueUrl(value: string) {
    this._newIssueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newIssueUrlInput() {
    return this._newIssueUrl;
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

  // use_inherited_settings - computed: true, optional: true, required: false
  private _useInheritedSettings?: boolean | cdktf.IResolvable; 
  public get useInheritedSettings() {
    return this.getBooleanAttribute('use_inherited_settings');
  }
  public set useInheritedSettings(value: boolean | cdktf.IResolvable) {
    this._useInheritedSettings = value;
  }
  public resetUseInheritedSettings() {
    this._useInheritedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInheritedSettingsInput() {
    return this._useInheritedSettings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      issues_url: cdktf.stringToTerraform(this._issuesUrl),
      new_issue_url: cdktf.stringToTerraform(this._newIssueUrl),
      project: cdktf.stringToTerraform(this._project),
      project_url: cdktf.stringToTerraform(this._projectUrl),
      use_inherited_settings: cdktf.booleanToTerraform(this._useInheritedSettings),
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
      new_issue_url: {
        value: cdktf.stringToHclTerraform(this._newIssueUrl),
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
      use_inherited_settings: {
        value: cdktf.booleanToHclTerraform(this._useInheritedSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
