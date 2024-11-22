# `serviceJira` Submodule <a name="`serviceJira` Submodule" id="@cdktf/provider-gitlab.serviceJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceJira <a name="ServiceJira" id="@cdktf/provider-gitlab.serviceJira.ServiceJira"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira gitlab_service_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_jira.ServiceJira;

ServiceJira.Builder.create(Construct scope, java.lang.String id)
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
//  .projectKey(java.lang.String)
//  .projectKeys(java.util.List<java.lang.String>)
//  .useInheritedSettings(java.lang.Boolean)
//  .useInheritedSettings(IResolvable)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.commitEvents">commitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#id ServiceJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraAuthType">jiraAuthType</a></code> | <code>java.lang.Number</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>java.lang.String</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssueRegex">jiraIssueRegex</a></code> | <code>java.lang.String</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable automatic issue transitions. Takes precedence over jira_issue_transition_id if enabled. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>java.lang.String</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The short identifier for your JIRA project, all uppercase, e.g., PROJ. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.projectKeys">projectKeys</a></code> | <code>java.util.List<java.lang.String></code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.useInheritedSettings">useInheritedSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The email or username to be used with Jira. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#password ServiceJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#project ServiceJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#url ServiceJira#url}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.apiUrl"></a>

- *Type:* java.lang.String

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#api_url ServiceJira#api_url}

---

##### `commentOnEventEnabled`<sup>Optional</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.commentOnEventEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#comment_on_event_enabled ServiceJira#comment_on_event_enabled}

---

##### `commitEvents`<sup>Optional</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.commitEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#commit_events ServiceJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#id ServiceJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.issuesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#issues_enabled ServiceJira#issues_enabled}

---

##### `jiraAuthType`<sup>Optional</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraAuthType"></a>

- *Type:* java.lang.Number

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_auth_type ServiceJira#jira_auth_type}

---

##### `jiraIssuePrefix`<sup>Optional</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssuePrefix"></a>

- *Type:* java.lang.String

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_prefix ServiceJira#jira_issue_prefix}

---

##### `jiraIssueRegex`<sup>Optional</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssueRegex"></a>

- *Type:* java.lang.String

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_regex ServiceJira#jira_issue_regex}

---

##### `jiraIssueTransitionAutomatic`<sup>Optional</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssueTransitionAutomatic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable automatic issue transitions. Takes precedence over jira_issue_transition_id if enabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_transition_automatic ServiceJira#jira_issue_transition_automatic}

---

##### `jiraIssueTransitionId`<sup>Optional</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.jiraIssueTransitionId"></a>

- *Type:* java.lang.String

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_transition_id ServiceJira#jira_issue_transition_id}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#merge_requests_events ServiceJira#merge_requests_events}

---

##### `projectKey`<sup>Optional</sup> <a name="projectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.projectKey"></a>

- *Type:* java.lang.String

The short identifier for your JIRA project, all uppercase, e.g., PROJ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#project_key ServiceJira#project_key}

---

##### `projectKeys`<sup>Optional</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.projectKeys"></a>

- *Type:* java.util.List<java.lang.String>

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#project_keys ServiceJira#project_keys}

---

##### `useInheritedSettings`<sup>Optional</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.useInheritedSettings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#use_inherited_settings ServiceJira#use_inherited_settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#username ServiceJira#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommentOnEventEnabled">resetCommentOnEventEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommitEvents">resetCommitEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetIssuesEnabled">resetIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraAuthType">resetJiraAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssuePrefix">resetJiraIssuePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueRegex">resetJiraIssueRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionAutomatic">resetJiraIssueTransitionAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionId">resetJiraIssueTransitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKey">resetProjectKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKeys">resetProjectKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetUseInheritedSettings">resetUseInheritedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetApiUrl"></a>

```java
public void resetApiUrl()
```

##### `resetCommentOnEventEnabled` <a name="resetCommentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommentOnEventEnabled"></a>

```java
public void resetCommentOnEventEnabled()
```

##### `resetCommitEvents` <a name="resetCommitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommitEvents"></a>

```java
public void resetCommitEvents()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetId"></a>

```java
public void resetId()
```

##### `resetIssuesEnabled` <a name="resetIssuesEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetIssuesEnabled"></a>

```java
public void resetIssuesEnabled()
```

##### `resetJiraAuthType` <a name="resetJiraAuthType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraAuthType"></a>

```java
public void resetJiraAuthType()
```

##### `resetJiraIssuePrefix` <a name="resetJiraIssuePrefix" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssuePrefix"></a>

```java
public void resetJiraIssuePrefix()
```

##### `resetJiraIssueRegex` <a name="resetJiraIssueRegex" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueRegex"></a>

```java
public void resetJiraIssueRegex()
```

##### `resetJiraIssueTransitionAutomatic` <a name="resetJiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionAutomatic"></a>

```java
public void resetJiraIssueTransitionAutomatic()
```

##### `resetJiraIssueTransitionId` <a name="resetJiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionId"></a>

```java
public void resetJiraIssueTransitionId()
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetMergeRequestsEvents"></a>

```java
public void resetMergeRequestsEvents()
```

##### `resetProjectKey` <a name="resetProjectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKey"></a>

```java
public void resetProjectKey()
```

##### `resetProjectKeys` <a name="resetProjectKeys" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKeys"></a>

```java
public void resetProjectKeys()
```

##### `resetUseInheritedSettings` <a name="resetUseInheritedSettings" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetUseInheritedSettings"></a>

```java
public void resetUseInheritedSettings()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceJira resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_jira.ServiceJira;

ServiceJira.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_jira.ServiceJira;

ServiceJira.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_jira.ServiceJira;

ServiceJira.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_jira.ServiceJira;

ServiceJira.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceJira.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceJira resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceJira to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrlInput">apiUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabledInput">commentOnEventEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEventsInput">commitEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEnabledInput">issuesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraAuthTypeInput">jiraAuthTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssuePrefixInput">jiraIssuePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueRegexInput">jiraIssueRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionAutomaticInput">jiraIssueTransitionAutomaticInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionIdInput">jiraIssueTransitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeysInput">projectKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.useInheritedSettingsInput">useInheritedSettingsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEvents">commitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraAuthType">jiraAuthType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueRegex">jiraIssueRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeys">projectKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.useInheritedSettings">useInheritedSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrlInput"></a>

```java
public java.lang.String getApiUrlInput();
```

- *Type:* java.lang.String

---

##### `commentOnEventEnabledInput`<sup>Optional</sup> <a name="commentOnEventEnabledInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabledInput"></a>

```java
public java.lang.Object getCommentOnEventEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitEventsInput`<sup>Optional</sup> <a name="commitEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEventsInput"></a>

```java
public java.lang.Object getCommitEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuesEnabledInput`<sup>Optional</sup> <a name="issuesEnabledInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEnabledInput"></a>

```java
public java.lang.Object getIssuesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraAuthTypeInput`<sup>Optional</sup> <a name="jiraAuthTypeInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraAuthTypeInput"></a>

```java
public java.lang.Number getJiraAuthTypeInput();
```

- *Type:* java.lang.Number

---

##### `jiraIssuePrefixInput`<sup>Optional</sup> <a name="jiraIssuePrefixInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssuePrefixInput"></a>

```java
public java.lang.String getJiraIssuePrefixInput();
```

- *Type:* java.lang.String

---

##### `jiraIssueRegexInput`<sup>Optional</sup> <a name="jiraIssueRegexInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueRegexInput"></a>

```java
public java.lang.String getJiraIssueRegexInput();
```

- *Type:* java.lang.String

---

##### `jiraIssueTransitionAutomaticInput`<sup>Optional</sup> <a name="jiraIssueTransitionAutomaticInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionAutomaticInput"></a>

```java
public java.lang.Object getJiraIssueTransitionAutomaticInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraIssueTransitionIdInput`<sup>Optional</sup> <a name="jiraIssueTransitionIdInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionIdInput"></a>

```java
public java.lang.String getJiraIssueTransitionIdInput();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEventsInput"></a>

```java
public java.lang.Object getMergeRequestsEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `projectKeysInput`<sup>Optional</sup> <a name="projectKeysInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeysInput"></a>

```java
public java.util.List<java.lang.String> getProjectKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `useInheritedSettingsInput`<sup>Optional</sup> <a name="useInheritedSettingsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.useInheritedSettingsInput"></a>

```java
public java.lang.Object getUseInheritedSettingsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

---

##### `commentOnEventEnabled`<sup>Required</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabled"></a>

```java
public java.lang.Object getCommentOnEventEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitEvents`<sup>Required</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEvents"></a>

```java
public java.lang.Object getCommitEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEnabled"></a>

```java
public java.lang.Object getIssuesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraAuthType`<sup>Required</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraAuthType"></a>

```java
public java.lang.Number getJiraAuthType();
```

- *Type:* java.lang.Number

---

##### `jiraIssuePrefix`<sup>Required</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssuePrefix"></a>

```java
public java.lang.String getJiraIssuePrefix();
```

- *Type:* java.lang.String

---

##### `jiraIssueRegex`<sup>Required</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueRegex"></a>

```java
public java.lang.String getJiraIssueRegex();
```

- *Type:* java.lang.String

---

##### `jiraIssueTransitionAutomatic`<sup>Required</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionAutomatic"></a>

```java
public java.lang.Object getJiraIssueTransitionAutomatic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jiraIssueTransitionId`<sup>Required</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionId"></a>

```java
public java.lang.String getJiraIssueTransitionId();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `projectKeys`<sup>Required</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeys"></a>

```java
public java.util.List<java.lang.String> getProjectKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `useInheritedSettings`<sup>Required</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.useInheritedSettings"></a>

```java
public java.lang.Object getUseInheritedSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceJiraConfig <a name="ServiceJiraConfig" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_jira.ServiceJiraConfig;

ServiceJiraConfig.builder()
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
//  .projectKey(java.lang.String)
//  .projectKeys(java.util.List<java.lang.String>)
//  .useInheritedSettings(java.lang.Boolean)
//  .useInheritedSettings(IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.password">password</a></code> | <code>java.lang.String</code> | The Jira API token, password, or personal access token to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.url">url</a></code> | <code>java.lang.String</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.apiUrl">apiUrl</a></code> | <code>java.lang.String</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commentOnEventEnabled">commentOnEventEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commitEvents">commitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#id ServiceJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable viewing Jira issues in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraAuthType">jiraAuthType</a></code> | <code>java.lang.Number</code> | The authentication method to be used with Jira. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssuePrefix">jiraIssuePrefix</a></code> | <code>java.lang.String</code> | Prefix to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueRegex">jiraIssueRegex</a></code> | <code>java.lang.String</code> | Regular expression to match Jira issue keys. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionAutomatic">jiraIssueTransitionAutomatic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable automatic issue transitions. Takes precedence over jira_issue_transition_id if enabled. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionId">jiraIssueTransitionId</a></code> | <code>java.lang.String</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The short identifier for your JIRA project, all uppercase, e.g., PROJ. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKeys">projectKeys</a></code> | <code>java.util.List<java.lang.String></code> | Keys of Jira projects. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.useInheritedSettings">useInheritedSettings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not to inherit default settings. Defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.username">username</a></code> | <code>java.lang.String</code> | The email or username to be used with Jira. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The Jira API token, password, or personal access token to be used with Jira.

When your authentication method is basic (jira_auth_type is 0), use an API token for Jira Cloud or a password for Jira Data Center or Jira Server. When your authentication method is a Jira personal access token (jira_auth_type is 1), use the personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#password ServiceJira#password}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#project ServiceJira#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#url ServiceJira#url}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.apiUrl"></a>

```java
public java.lang.String getApiUrl();
```

- *Type:* java.lang.String

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#api_url ServiceJira#api_url}

---

##### `commentOnEventEnabled`<sup>Optional</sup> <a name="commentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commentOnEventEnabled"></a>

```java
public java.lang.Object getCommentOnEventEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#comment_on_event_enabled ServiceJira#comment_on_event_enabled}

---

##### `commitEvents`<sup>Optional</sup> <a name="commitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commitEvents"></a>

```java
public java.lang.Object getCommitEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#commit_events ServiceJira#commit_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#id ServiceJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.issuesEnabled"></a>

```java
public java.lang.Object getIssuesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable viewing Jira issues in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#issues_enabled ServiceJira#issues_enabled}

---

##### `jiraAuthType`<sup>Optional</sup> <a name="jiraAuthType" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraAuthType"></a>

```java
public java.lang.Number getJiraAuthType();
```

- *Type:* java.lang.Number

The authentication method to be used with Jira.

0 means Basic Authentication. 1 means Jira personal access token. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_auth_type ServiceJira#jira_auth_type}

---

##### `jiraIssuePrefix`<sup>Optional</sup> <a name="jiraIssuePrefix" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssuePrefix"></a>

```java
public java.lang.String getJiraIssuePrefix();
```

- *Type:* java.lang.String

Prefix to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_prefix ServiceJira#jira_issue_prefix}

---

##### `jiraIssueRegex`<sup>Optional</sup> <a name="jiraIssueRegex" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueRegex"></a>

```java
public java.lang.String getJiraIssueRegex();
```

- *Type:* java.lang.String

Regular expression to match Jira issue keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_regex ServiceJira#jira_issue_regex}

---

##### `jiraIssueTransitionAutomatic`<sup>Optional</sup> <a name="jiraIssueTransitionAutomatic" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionAutomatic"></a>

```java
public java.lang.Object getJiraIssueTransitionAutomatic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable automatic issue transitions. Takes precedence over jira_issue_transition_id if enabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_transition_automatic ServiceJira#jira_issue_transition_automatic}

---

##### `jiraIssueTransitionId`<sup>Optional</sup> <a name="jiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionId"></a>

```java
public java.lang.String getJiraIssueTransitionId();
```

- *Type:* java.lang.String

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#jira_issue_transition_id ServiceJira#jira_issue_transition_id}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#merge_requests_events ServiceJira#merge_requests_events}

---

##### `projectKey`<sup>Optional</sup> <a name="projectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

The short identifier for your JIRA project, all uppercase, e.g., PROJ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#project_key ServiceJira#project_key}

---

##### `projectKeys`<sup>Optional</sup> <a name="projectKeys" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKeys"></a>

```java
public java.util.List<java.lang.String> getProjectKeys();
```

- *Type:* java.util.List<java.lang.String>

Keys of Jira projects.

When issues_enabled is true, this setting specifies which Jira projects to view issues from in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#project_keys ServiceJira#project_keys}

---

##### `useInheritedSettings`<sup>Optional</sup> <a name="useInheritedSettings" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.useInheritedSettings"></a>

```java
public java.lang.Object getUseInheritedSettings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#use_inherited_settings ServiceJira#use_inherited_settings}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The email or username to be used with Jira.

For Jira Cloud use an email, for Jira Data Center and Jira Server use a username. Required when using Basic authentication (jira_auth_type is 0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/service_jira#username ServiceJira#username}

---



