// https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationJenkinsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable SSL verification. Defaults to `true` (enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#enable_ssl_verification IntegrationJenkins#enable_ssl_verification}
  */
  readonly enableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Jenkins URL like `http://jenkins.example.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#jenkins_url IntegrationJenkins#jenkins_url}
  */
  readonly jenkinsUrl: string;
  /**
  * Enable notifications for merge request events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#merge_request_events IntegrationJenkins#merge_request_events}
  */
  readonly mergeRequestEvents?: boolean | cdktf.IResolvable;
  /**
  * Password for authentication with the Jenkins server, if authentication is required by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#password IntegrationJenkins#password}
  */
  readonly password?: string;
  /**
  * ID of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#project IntegrationJenkins#project}
  */
  readonly project: string;
  /**
  * The URL-friendly project name. Example: `my_project_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#project_name IntegrationJenkins#project_name}
  */
  readonly projectName: string;
  /**
  * Enable notifications for push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#push_events IntegrationJenkins#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for tag push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#tag_push_events IntegrationJenkins#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * Username for authentication with the Jenkins server, if authentication is required by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#username IntegrationJenkins#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins gitlab_integration_jenkins}
*/
export class IntegrationJenkins extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_integration_jenkins";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationJenkins resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationJenkins to import
  * @param importFromId The id of the existing IntegrationJenkins that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationJenkins to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_integration_jenkins", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins gitlab_integration_jenkins} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationJenkinsConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationJenkinsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_integration_jenkins',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.3.0',
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
    this._enableSslVerification = config.enableSslVerification;
    this._jenkinsUrl = config.jenkinsUrl;
    this._mergeRequestEvents = config.mergeRequestEvents;
    this._password = config.password;
    this._project = config.project;
    this._projectName = config.projectName;
    this._pushEvents = config.pushEvents;
    this._tagPushEvents = config.tagPushEvents;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // enable_ssl_verification - computed: true, optional: true, required: false
  private _enableSslVerification?: boolean | cdktf.IResolvable; 
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
  }
  public set enableSslVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslVerification = value;
  }
  public resetEnableSslVerification() {
    this._enableSslVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslVerificationInput() {
    return this._enableSslVerification;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jenkins_url - computed: false, optional: false, required: true
  private _jenkinsUrl?: string; 
  public get jenkinsUrl() {
    return this.getStringAttribute('jenkins_url');
  }
  public set jenkinsUrl(value: string) {
    this._jenkinsUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsUrlInput() {
    return this._jenkinsUrl;
  }

  // merge_request_events - computed: true, optional: true, required: false
  private _mergeRequestEvents?: boolean | cdktf.IResolvable; 
  public get mergeRequestEvents() {
    return this.getBooleanAttribute('merge_request_events');
  }
  public set mergeRequestEvents(value: boolean | cdktf.IResolvable) {
    this._mergeRequestEvents = value;
  }
  public resetMergeRequestEvents() {
    this._mergeRequestEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestEventsInput() {
    return this._mergeRequestEvents;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
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

  // push_events - computed: true, optional: true, required: false
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

  // tag_push_events - computed: true, optional: true, required: false
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      enable_ssl_verification: cdktf.booleanToTerraform(this._enableSslVerification),
      jenkins_url: cdktf.stringToTerraform(this._jenkinsUrl),
      merge_request_events: cdktf.booleanToTerraform(this._mergeRequestEvents),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      project_name: cdktf.stringToTerraform(this._projectName),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_ssl_verification: {
        value: cdktf.booleanToHclTerraform(this._enableSslVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jenkins_url: {
        value: cdktf.stringToHclTerraform(this._jenkinsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_request_events: {
        value: cdktf.booleanToHclTerraform(this._mergeRequestEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      push_events: {
        value: cdktf.booleanToHclTerraform(this._pushEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_push_events: {
        value: cdktf.booleanToHclTerraform(this._tagPushEvents),
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
