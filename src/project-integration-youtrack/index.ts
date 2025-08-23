/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_youtrack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIntegrationYoutrackConfig extends cdktf.TerraformMetaArguments {
  /**
  * URL to view an issue in the external issue tracker. Must contain :id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_youtrack#issues_url ProjectIntegrationYoutrack#issues_url}
  */
  readonly issuesUrl: string;
  /**
  * ID or namespace of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_youtrack#project ProjectIntegrationYoutrack#project}
  */
  readonly project: string;
  /**
  * URL of the project in the external issue tracker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_youtrack#project_url ProjectIntegrationYoutrack#project_url}
  */
  readonly projectUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_youtrack gitlab_project_integration_youtrack}
*/
export class ProjectIntegrationYoutrack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_integration_youtrack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectIntegrationYoutrack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIntegrationYoutrack to import
  * @param importFromId The id of the existing ProjectIntegrationYoutrack that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_youtrack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIntegrationYoutrack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_integration_youtrack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_youtrack gitlab_project_integration_youtrack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIntegrationYoutrackConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIntegrationYoutrackConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_integration_youtrack',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.3.0',
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
    this._project = config.project;
    this._projectUrl = config.projectUrl;
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
