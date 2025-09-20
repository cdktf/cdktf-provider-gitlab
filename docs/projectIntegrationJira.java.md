# `projectIntegrationJira` Submodule <a name="`projectIntegrationJira` Submodule" id="@cdktf/provider-gitlab.projectIntegrationJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationJira <a name="ProjectIntegrationJira" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira gitlab_project_integration_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jira.ProjectIntegrationJira;

ProjectIntegrationJira.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .password(java.lang.String)
    .project(java.lang.String)
    .url(java.lang.String)
//  .apiUrl(java.lang.String)
//  .commentOnEventEnabled(java.lang.Boolean)
//  .commentOnEventEnabled(IResolvable)
//  .commitEvents(java.lang.Boolean)
//  .commitEvents(IResolvable)
//  .id(java.lang.String)
//  .issuesEnabled(java.lang.Boolean)
//  .issuesEnabled(IResolvable)
//  .jiraAuthType(java.lang.Number)
//  .jiraIssuePrefix(java.lang.String)
//  .jiraIssueRegex(java.lang.String)
//  .jiraIssueTransitionAutomatic(java.lang.Boolean)
//  .jiraIssueTransitionAutomatic(IResolvable)
//  .jiraIssueTransitionId(java.lang.String)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .projectKeys(java.util.List<java.lang.String>)
//  .useInheritedSettings(java.lang.Boolean)
//  .useInheritedSettings(IResolvable)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commitEvents">commitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraAuthType">jiraAuthType</a></code> | <code>java.lang.Number</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>java.lang.String</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueRegex">jiraIssueRegex</a></code> | <code>java.lang.String</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable automatic issue transitions. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>java.lang.String</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.projectKeys">projectKeys</a></code> | <code>java.util.List<java.lang.String></code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.useInheritedSettings">useInheritedSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The email or username to be used with Jira. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#password ProjectIntegrationJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#project ProjectIntegrationJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#url ProjectIntegrationJira#url}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.apiUrl"></a>

- *Type:* java.lang.String

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#api_url ProjectIntegrationJira#api_url}

---

##### `commentOnEventEnabled`<sup>Optional</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commentOnEventEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#comment_on_event_enabled ProjectIntegrationJira#comment_on_event_enabled}

---

##### `commitEvents`<sup>Optional</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.commitEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#commit_events ProjectIntegrationJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.issuesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#issues_enabled ProjectIntegrationJira#issues_enabled}

---

##### `jiraAuthType`<sup>Optional</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraAuthType"></a>

- *Type:* java.lang.Number

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_auth_type ProjectIntegrationJira#jira_auth_type}

---

##### `jiraIssuePrefix`<sup>Optional</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssuePrefix"></a>

- *Type:* java.lang.String

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_prefix ProjectIntegrationJira#jira_issue_prefix}

---

##### `jiraIssueRegex`<sup>Optional</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueRegex"></a>

- *Type:* java.lang.String

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_regex ProjectIntegrationJira#jira_issue_regex}

---

##### `jiraIssueTransitionAutomatic`<sup>Optional</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionAutomatic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable automatic issue transitions.

Takes precedence over jira_issue_transition_id if enabled. Defaults to false. This value cannot be imported, and will not perform drift detection if changed outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_transition_automatic ProjectIntegrationJira#jira_issue_transition_automatic}

---

##### `jiraIssueTransitionId`<sup>Optional</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.jiraIssueTransitionId"></a>

- *Type:* java.lang.String

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_transition_id ProjectIntegrationJira#jira_issue_transition_id}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#merge_requests_events ProjectIntegrationJira#merge_requests_events}

---

##### `projectKeys`<sup>Optional</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.projectKeys"></a>

- *Type:* java.util.List<java.lang.String>

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#project_keys ProjectIntegrationJira#project_keys}

---

##### `useInheritedSettings`<sup>Optional</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.useInheritedSettings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#use_inherited_settings ProjectIntegrationJira#use_inherited_settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#username ProjectIntegrationJira#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommentOnEventEnabled">resetCommentOnEventEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommitEvents">resetCommitEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetIssuesEnabled">resetIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraAuthType">resetJiraAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssuePrefix">resetJiraIssuePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueRegex">resetJiraIssueRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionAutomatic">resetJiraIssueTransitionAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionId">resetJiraIssueTransitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetProjectKeys">resetProjectKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUseInheritedSettings">resetUseInheritedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetApiUrl"></a>

```java
public void resetApiUrl()
```

##### `resetCommentOnEventEnabled` <a name="resetCommentOnEventEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommentOnEventEnabled"></a>

```java
public void resetCommentOnEventEnabled()
```

##### `resetCommitEvents` <a name="resetCommitEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetCommitEvents"></a>

```java
public void resetCommitEvents()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetId"></a>

```java
public void resetId()
```

##### `resetIssuesEnabled` <a name="resetIssuesEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetIssuesEnabled"></a>

```java
public void resetIssuesEnabled()
```

##### `resetJiraAuthType` <a name="resetJiraAuthType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraAuthType"></a>

```java
public void resetJiraAuthType()
```

##### `resetJiraIssuePrefix` <a name="resetJiraIssuePrefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssuePrefix"></a>

```java
public void resetJiraIssuePrefix()
```

##### `resetJiraIssueRegex` <a name="resetJiraIssueRegex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueRegex"></a>

```java
public void resetJiraIssueRegex()
```

##### `resetJiraIssueTransitionAutomatic` <a name="resetJiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionAutomatic"></a>

```java
public void resetJiraIssueTransitionAutomatic()
```

##### `resetJiraIssueTransitionId` <a name="resetJiraIssueTransitionId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetJiraIssueTransitionId"></a>

```java
public void resetJiraIssueTransitionId()
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetMergeRequestsEvents"></a>

```java
public void resetMergeRequestsEvents()
```

##### `resetProjectKeys` <a name="resetProjectKeys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetProjectKeys"></a>

```java
public void resetProjectKeys()
```

##### `resetUseInheritedSettings` <a name="resetUseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUseInheritedSettings"></a>

```java
public void resetUseInheritedSettings()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationJira resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jira.ProjectIntegrationJira;

ProjectIntegrationJira.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jira.ProjectIntegrationJira;

ProjectIntegrationJira.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jira.ProjectIntegrationJira;

ProjectIntegrationJira.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jira.ProjectIntegrationJira;

ProjectIntegrationJira.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectIntegrationJira.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectIntegrationJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectIntegrationJira to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectIntegrationJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrlInput">apiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabledInput">commentOnEventEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEventsInput">commitEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabledInput">issuesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthTypeInput">jiraAuthTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefixInput">jiraIssuePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegexInput">jiraIssueRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomaticInput">jiraIssueTransitionAutomaticInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionIdInput">jiraIssueTransitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeysInput">projectKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettingsInput">useInheritedSettingsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEvents">commitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthType">jiraAuthType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegex">jiraIssueRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeys">projectKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettings">useInheritedSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrlInput"></a>

```java
public java.lang.String getApiUrlInput();
```

- *Type:* java.lang.String

---

##### `commentOnEventEnabledInput`<sup>Optional</sup> <a name="commentOnEventEnabledInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabledInput"></a>

```java
public java.lang.Object getCommentOnEventEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitEventsInput`<sup>Optional</sup> <a name="commitEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEventsInput"></a>

```java
public java.lang.Object getCommitEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuesEnabledInput`<sup>Optional</sup> <a name="issuesEnabledInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabledInput"></a>

```java
public java.lang.Object getIssuesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraAuthTypeInput`<sup>Optional</sup> <a name="jiraAuthTypeInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthTypeInput"></a>

```java
public java.lang.Number getJiraAuthTypeInput();
```

- *Type:* java.lang.Number

---

##### `jiraIssuePrefixInput`<sup>Optional</sup> <a name="jiraIssuePrefixInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefixInput"></a>

```java
public java.lang.String getJiraIssuePrefixInput();
```

- *Type:* java.lang.String

---

##### `jiraIssueRegexInput`<sup>Optional</sup> <a name="jiraIssueRegexInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegexInput"></a>

```java
public java.lang.String getJiraIssueRegexInput();
```

- *Type:* java.lang.String

---

##### `jiraIssueTransitionAutomaticInput`<sup>Optional</sup> <a name="jiraIssueTransitionAutomaticInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomaticInput"></a>

```java
public java.lang.Object getJiraIssueTransitionAutomaticInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraIssueTransitionIdInput`<sup>Optional</sup> <a name="jiraIssueTransitionIdInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionIdInput"></a>

```java
public java.lang.String getJiraIssueTransitionIdInput();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEventsInput"></a>

```java
public java.lang.Object getMergeRequestsEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `projectKeysInput`<sup>Optional</sup> <a name="projectKeysInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeysInput"></a>

```java
public java.util.List<java.lang.String> getProjectKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `useInheritedSettingsInput`<sup>Optional</sup> <a name="useInheritedSettingsInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettingsInput"></a>

```java
public java.lang.Object getUseInheritedSettingsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `commentOnEventEnabled`<sup>Required</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commentOnEventEnabled"></a>

```java
public java.lang.Object getCommentOnEventEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitEvents`<sup>Required</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.commitEvents"></a>

```java
public java.lang.Object getCommitEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.issuesEnabled"></a>

```java
public java.lang.Object getIssuesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraAuthType`<sup>Required</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraAuthType"></a>

```java
public java.lang.Number getJiraAuthType();
```

- *Type:* java.lang.Number

---

##### `jiraIssuePrefix`<sup>Required</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssuePrefix"></a>

```java
public java.lang.String getJiraIssuePrefix();
```

- *Type:* java.lang.String

---

##### `jiraIssueRegex`<sup>Required</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueRegex"></a>

```java
public java.lang.String getJiraIssueRegex();
```

- *Type:* java.lang.String

---

##### `jiraIssueTransitionAutomatic`<sup>Required</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionAutomatic"></a>

```java
public java.lang.Object getJiraIssueTransitionAutomatic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraIssueTransitionId`<sup>Required</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.jiraIssueTransitionId"></a>

```java
public java.lang.String getJiraIssueTransitionId();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `projectKeys`<sup>Required</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.projectKeys"></a>

```java
public java.util.List<java.lang.String> getProjectKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `useInheritedSettings`<sup>Required</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.useInheritedSettings"></a>

```java
public java.lang.Object getUseInheritedSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJira.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationJiraConfig <a name="ProjectIntegrationJiraConfig" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jira.ProjectIntegrationJiraConfig;

ProjectIntegrationJiraConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .password(java.lang.String)
    .project(java.lang.String)
    .url(java.lang.String)
//  .apiUrl(java.lang.String)
//  .commentOnEventEnabled(java.lang.Boolean)
//  .commentOnEventEnabled(IResolvable)
//  .commitEvents(java.lang.Boolean)
//  .commitEvents(IResolvable)
//  .id(java.lang.String)
//  .issuesEnabled(java.lang.Boolean)
//  .issuesEnabled(IResolvable)
//  .jiraAuthType(java.lang.Number)
//  .jiraIssuePrefix(java.lang.String)
//  .jiraIssueRegex(java.lang.String)
//  .jiraIssueTransitionAutomatic(java.lang.Boolean)
//  .jiraIssueTransitionAutomatic(IResolvable)
//  .jiraIssueTransitionId(java.lang.String)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .projectKeys(java.util.List<java.lang.String>)
//  .useInheritedSettings(java.lang.Boolean)
//  .useInheritedSettings(IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.password">password</a></code> | <code>java.lang.String</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.url">url</a></code> | <code>java.lang.String</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commitEvents">commitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraAuthType">jiraAuthType</a></code> | <code>java.lang.Number</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>java.lang.String</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueRegex">jiraIssueRegex</a></code> | <code>java.lang.String</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable automatic issue transitions. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>java.lang.String</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.projectKeys">projectKeys</a></code> | <code>java.util.List<java.lang.String></code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.useInheritedSettings">useInheritedSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.username">username</a></code> | <code>java.lang.String</code> | The email or username to be used with Jira. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#password ProjectIntegrationJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#project ProjectIntegrationJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#url ProjectIntegrationJira#url}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#api_url ProjectIntegrationJira#api_url}

---

##### `commentOnEventEnabled`<sup>Optional</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commentOnEventEnabled"></a>

```java
public java.lang.Object getCommentOnEventEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#comment_on_event_enabled ProjectIntegrationJira#comment_on_event_enabled}

---

##### `commitEvents`<sup>Optional</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.commitEvents"></a>

```java
public java.lang.Object getCommitEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#commit_events ProjectIntegrationJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#id ProjectIntegrationJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.issuesEnabled"></a>

```java
public java.lang.Object getIssuesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#issues_enabled ProjectIntegrationJira#issues_enabled}

---

##### `jiraAuthType`<sup>Optional</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraAuthType"></a>

```java
public java.lang.Number getJiraAuthType();
```

- *Type:* java.lang.Number

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_auth_type ProjectIntegrationJira#jira_auth_type}

---

##### `jiraIssuePrefix`<sup>Optional</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssuePrefix"></a>

```java
public java.lang.String getJiraIssuePrefix();
```

- *Type:* java.lang.String

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_prefix ProjectIntegrationJira#jira_issue_prefix}

---

##### `jiraIssueRegex`<sup>Optional</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueRegex"></a>

```java
public java.lang.String getJiraIssueRegex();
```

- *Type:* java.lang.String

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_regex ProjectIntegrationJira#jira_issue_regex}

---

##### `jiraIssueTransitionAutomatic`<sup>Optional</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionAutomatic"></a>

```java
public java.lang.Object getJiraIssueTransitionAutomatic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable automatic issue transitions.

Takes precedence over jira_issue_transition_id if enabled. Defaults to false. This value cannot be imported, and will not perform drift detection if changed outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_transition_automatic ProjectIntegrationJira#jira_issue_transition_automatic}

---

##### `jiraIssueTransitionId`<sup>Optional</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.jiraIssueTransitionId"></a>

```java
public java.lang.String getJiraIssueTransitionId();
```

- *Type:* java.lang.String

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#jira_issue_transition_id ProjectIntegrationJira#jira_issue_transition_id}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#merge_requests_events ProjectIntegrationJira#merge_requests_events}

---

##### `projectKeys`<sup>Optional</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.projectKeys"></a>

```java
public java.util.List<java.lang.String> getProjectKeys();
```

- *Type:* java.util.List<java.lang.String>

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#project_keys ProjectIntegrationJira#project_keys}

---

##### `useInheritedSettings`<sup>Optional</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.useInheritedSettings"></a>

```java
public java.lang.Object getUseInheritedSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#use_inherited_settings ProjectIntegrationJira#use_inherited_settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJira.ProjectIntegrationJiraConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jira#username ProjectIntegrationJira#username}

---



