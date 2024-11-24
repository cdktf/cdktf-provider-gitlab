/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationJiraConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#api_url IntegrationJira#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Enable comments inside Jira issues on each GitLab event (commit / merge request)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#comment_on_event_enabled IntegrationJira#comment_on_event_enabled}
  */
  readonly commentOnEventEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable notifications for commit events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#commit_events IntegrationJira#commit_events}
  */
  readonly commitEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#id IntegrationJira#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable viewing Jira issues in GitLab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#issues_enabled IntegrationJira#issues_enabled}
  */
  readonly issuesEnabled?: boolean | cdktf.IResolvable;
  /**
  * The authentication method to be used with Jira. 0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#jira_auth_type IntegrationJira#jira_auth_type}
  */
  readonly jiraAuthType?: number;
  /**
  * Prefix to match Jira issue keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#jira_issue_prefix IntegrationJira#jira_issue_prefix}
  */
  readonly jiraIssuePrefix?: string;
  /**
  * Regular expression to match Jira issue keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#jira_issue_regex IntegrationJira#jira_issue_regex}
  */
  readonly jiraIssueRegex?: string;
  /**
  * Enable automatic issue transitions. Takes precedence over jira_issue_transition_id if enabled. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#jira_issue_transition_automatic IntegrationJira#jira_issue_transition_automatic}
  */
  readonly jiraIssueTransitionAutomatic?: boolean | cdktf.IResolvable;
  /**
  * The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#jira_issue_transition_id IntegrationJira#jira_issue_transition_id}
  */
  readonly jiraIssueTransitionId?: string;
  /**
  * Enable notifications for merge request events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#merge_requests_events IntegrationJira#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * The Jira API token, password, or personal access token to be used with Jira. When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#password IntegrationJira#password}
  */
  readonly password: string;
  /**
  * ID of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#project IntegrationJira#project}
  */
  readonly project: string;
  /**
  * The short identifier for your JIRA project, all uppercase, e.g., PROJ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#project_key IntegrationJira#project_key}
  */
  readonly projectKey?: string;
  /**
  * Keys of Jira projects. When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#project_keys IntegrationJira#project_keys}
  */
  readonly projectKeys?: string[];
  /**
  * The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#url IntegrationJira#url}
  */
  readonly url: string;
  /**
  * Indicates whether or not to inherit default settings. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#use_inherited_settings IntegrationJira#use_inherited_settings}
  */
  readonly useInheritedSettings?: boolean | cdktf.IResolvable;
  /**
  * The email or username to be used with Jira. For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#username IntegrationJira#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira gitlab_integration_jira}
*/
export class IntegrationJira extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_integration_jira";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationJira to import
  * @param importFromId The id of the existing IntegrationJira that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationJira to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_integration_jira", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/integration_jira gitlab_integration_jira} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationJiraConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationJiraConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_integration_jira',
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
    this._apiUrl = config.apiUrl;
    this._commentOnEventEnabled = config.commentOnEventEnabled;
    this._commitEvents = config.commitEvents;
    this._id = config.id;
    this._issuesEnabled = config.issuesEnabled;
    this._jiraAuthType = config.jiraAuthType;
    this._jiraIssuePrefix = config.jiraIssuePrefix;
    this._jiraIssueRegex = config.jiraIssueRegex;
    this._jiraIssueTransitionAutomatic = config.jiraIssueTransitionAutomatic;
    this._jiraIssueTransitionId = config.jiraIssueTransitionId;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._password = config.password;
    this._project = config.project;
    this._projectKey = config.projectKey;
    this._projectKeys = config.projectKeys;
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

  // api_url - computed: true, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // comment_on_event_enabled - computed: false, optional: true, required: false
  private _commentOnEventEnabled?: boolean | cdktf.IResolvable; 
  public get commentOnEventEnabled() {
    return this.getBooleanAttribute('comment_on_event_enabled');
  }
  public set commentOnEventEnabled(value: boolean | cdktf.IResolvable) {
    this._commentOnEventEnabled = value;
  }
  public resetCommentOnEventEnabled() {
    this._commentOnEventEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentOnEventEnabledInput() {
    return this._commentOnEventEnabled;
  }

  // commit_events - computed: true, optional: true, required: false
  private _commitEvents?: boolean | cdktf.IResolvable; 
  public get commitEvents() {
    return this.getBooleanAttribute('commit_events');
  }
  public set commitEvents(value: boolean | cdktf.IResolvable) {
    this._commitEvents = value;
  }
  public resetCommitEvents() {
    this._commitEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitEventsInput() {
    return this._commitEvents;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // issues_enabled - computed: false, optional: true, required: false
  private _issuesEnabled?: boolean | cdktf.IResolvable; 
  public get issuesEnabled() {
    return this.getBooleanAttribute('issues_enabled');
  }
  public set issuesEnabled(value: boolean | cdktf.IResolvable) {
    this._issuesEnabled = value;
  }
  public resetIssuesEnabled() {
    this._issuesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesEnabledInput() {
    return this._issuesEnabled;
  }

  // jira_auth_type - computed: false, optional: true, required: false
  private _jiraAuthType?: number; 
  public get jiraAuthType() {
    return this.getNumberAttribute('jira_auth_type');
  }
  public set jiraAuthType(value: number) {
    this._jiraAuthType = value;
  }
  public resetJiraAuthType() {
    this._jiraAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraAuthTypeInput() {
    return this._jiraAuthType;
  }

  // jira_issue_prefix - computed: false, optional: true, required: false
  private _jiraIssuePrefix?: string; 
  public get jiraIssuePrefix() {
    return this.getStringAttribute('jira_issue_prefix');
  }
  public set jiraIssuePrefix(value: string) {
    this._jiraIssuePrefix = value;
  }
  public resetJiraIssuePrefix() {
    this._jiraIssuePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssuePrefixInput() {
    return this._jiraIssuePrefix;
  }

  // jira_issue_regex - computed: false, optional: true, required: false
  private _jiraIssueRegex?: string; 
  public get jiraIssueRegex() {
    return this.getStringAttribute('jira_issue_regex');
  }
  public set jiraIssueRegex(value: string) {
    this._jiraIssueRegex = value;
  }
  public resetJiraIssueRegex() {
    this._jiraIssueRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueRegexInput() {
    return this._jiraIssueRegex;
  }

  // jira_issue_transition_automatic - computed: false, optional: true, required: false
  private _jiraIssueTransitionAutomatic?: boolean | cdktf.IResolvable; 
  public get jiraIssueTransitionAutomatic() {
    return this.getBooleanAttribute('jira_issue_transition_automatic');
  }
  public set jiraIssueTransitionAutomatic(value: boolean | cdktf.IResolvable) {
    this._jiraIssueTransitionAutomatic = value;
  }
  public resetJiraIssueTransitionAutomatic() {
    this._jiraIssueTransitionAutomatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueTransitionAutomaticInput() {
    return this._jiraIssueTransitionAutomatic;
  }

  // jira_issue_transition_id - computed: false, optional: true, required: false
  private _jiraIssueTransitionId?: string; 
  public get jiraIssueTransitionId() {
    return this.getStringAttribute('jira_issue_transition_id');
  }
  public set jiraIssueTransitionId(value: string) {
    this._jiraIssueTransitionId = value;
  }
  public resetJiraIssueTransitionId() {
    this._jiraIssueTransitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueTransitionIdInput() {
    return this._jiraIssueTransitionId;
  }

  // merge_requests_events - computed: true, optional: true, required: false
  private _mergeRequestsEvents?: boolean | cdktf.IResolvable; 
  public get mergeRequestsEvents() {
    return this.getBooleanAttribute('merge_requests_events');
  }
  public set mergeRequestsEvents(value: boolean | cdktf.IResolvable) {
    this._mergeRequestsEvents = value;
  }
  public resetMergeRequestsEvents() {
    this._mergeRequestsEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsEventsInput() {
    return this._mergeRequestsEvents;
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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // project_keys - computed: false, optional: true, required: false
  private _projectKeys?: string[]; 
  public get projectKeys() {
    return this.getListAttribute('project_keys');
  }
  public set projectKeys(value: string[]) {
    this._projectKeys = value;
  }
  public resetProjectKeys() {
    this._projectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeysInput() {
    return this._projectKeys;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // use_inherited_settings - computed: false, optional: true, required: false
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      comment_on_event_enabled: cdktf.booleanToTerraform(this._commentOnEventEnabled),
      commit_events: cdktf.booleanToTerraform(this._commitEvents),
      id: cdktf.stringToTerraform(this._id),
      issues_enabled: cdktf.booleanToTerraform(this._issuesEnabled),
      jira_auth_type: cdktf.numberToTerraform(this._jiraAuthType),
      jira_issue_prefix: cdktf.stringToTerraform(this._jiraIssuePrefix),
      jira_issue_regex: cdktf.stringToTerraform(this._jiraIssueRegex),
      jira_issue_transition_automatic: cdktf.booleanToTerraform(this._jiraIssueTransitionAutomatic),
      jira_issue_transition_id: cdktf.stringToTerraform(this._jiraIssueTransitionId),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      project_key: cdktf.stringToTerraform(this._projectKey),
      project_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectKeys),
      url: cdktf.stringToTerraform(this._url),
      use_inherited_settings: cdktf.booleanToTerraform(this._useInheritedSettings),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment_on_event_enabled: {
        value: cdktf.booleanToHclTerraform(this._commentOnEventEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      commit_events: {
        value: cdktf.booleanToHclTerraform(this._commitEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issues_enabled: {
        value: cdktf.booleanToHclTerraform(this._issuesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jira_auth_type: {
        value: cdktf.numberToHclTerraform(this._jiraAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jira_issue_prefix: {
        value: cdktf.stringToHclTerraform(this._jiraIssuePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_issue_regex: {
        value: cdktf.stringToHclTerraform(this._jiraIssueRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_issue_transition_automatic: {
        value: cdktf.booleanToHclTerraform(this._jiraIssueTransitionAutomatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jira_issue_transition_id: {
        value: cdktf.stringToHclTerraform(this._jiraIssueTransitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_requests_events: {
        value: cdktf.booleanToHclTerraform(this._mergeRequestsEvents),
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
