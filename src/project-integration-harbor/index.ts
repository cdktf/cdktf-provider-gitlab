/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIntegrationHarborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Password for authentication with the Harbor server, if authentication is required by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#password ProjectIntegrationHarbor#password}
  */
  readonly password: string;
  /**
  * ID of the GitLab project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#project ProjectIntegrationHarbor#project}
  */
  readonly project: string;
  /**
  * The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#project_name ProjectIntegrationHarbor#project_name}
  */
  readonly projectName: string;
  /**
  * Harbor URL. Example: `http://harbor.example.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#url ProjectIntegrationHarbor#url}
  */
  readonly url: string;
  /**
  * Indicates whether or not to inherit default settings. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#use_inherited_settings ProjectIntegrationHarbor#use_inherited_settings}
  */
  readonly useInheritedSettings?: boolean | cdktf.IResolvable;
  /**
  * Username for authentication with the Harbor server, if authentication is required by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#username ProjectIntegrationHarbor#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor gitlab_project_integration_harbor}
*/
export class ProjectIntegrationHarbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_integration_harbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectIntegrationHarbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIntegrationHarbor to import
  * @param importFromId The id of the existing ProjectIntegrationHarbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIntegrationHarbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_integration_harbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_harbor gitlab_project_integration_harbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIntegrationHarborConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIntegrationHarborConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_integration_harbor',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.6.1',
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
    this._password = config.password;
    this._project = config.project;
    this._projectName = config.projectName;
    this._url = config.url;
    this._useInheritedSettings = config.useInheritedSettings;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      project_name: cdktf.stringToTerraform(this._projectName),
      url: cdktf.stringToTerraform(this._url),
      use_inherited_settings: cdktf.booleanToTerraform(this._useInheritedSettings),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
