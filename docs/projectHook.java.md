# `projectHook` Submodule <a name="`projectHook` Submodule" id="@cdktf/provider-gitlab.projectHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectHook <a name="ProjectHook" id="@cdktf/provider-gitlab.projectHook.ProjectHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook gitlab_project_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_hook.ProjectHook;

ProjectHook.Builder.create(Construct scope, java.lang.String id)
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
    .project(java.lang.String)
    .url(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean)
//  .confidentialIssuesEvents(IResolvable)
//  .confidentialNoteEvents(java.lang.Boolean)
//  .confidentialNoteEvents(IResolvable)
//  .customWebhookTemplate(java.lang.String)
//  .deploymentEvents(java.lang.Boolean)
//  .deploymentEvents(IResolvable)
//  .enableSslVerification(java.lang.Boolean)
//  .enableSslVerification(IResolvable)
//  .id(java.lang.String)
//  .issuesEvents(java.lang.Boolean)
//  .issuesEvents(IResolvable)
//  .jobEvents(java.lang.Boolean)
//  .jobEvents(IResolvable)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .noteEvents(java.lang.Boolean)
//  .noteEvents(IResolvable)
//  .pipelineEvents(java.lang.Boolean)
//  .pipelineEvents(IResolvable)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .pushEventsBranchFilter(java.lang.String)
//  .releasesEvents(java.lang.Boolean)
//  .releasesEvents(IResolvable)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
//  .token(java.lang.String)
//  .wikiPageEvents(java.lang.Boolean)
//  .wikiPageEvents(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential notes events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.customWebhookTemplate">customWebhookTemplate</a></code> | <code>java.lang.String</code> | Set a custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.deploymentEvents">deploymentEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable ssl verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#id ProjectHook#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.jobEvents">jobEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for notes events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>java.lang.String</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.releasesEvents">releasesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for releases events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The name or id of the project to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#project ProjectHook#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#url ProjectHook#url}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#confidential_issues_events ProjectHook#confidential_issues_events}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#confidential_note_events ProjectHook#confidential_note_events}

---

##### `customWebhookTemplate`<sup>Optional</sup> <a name="customWebhookTemplate" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.customWebhookTemplate"></a>

- *Type:* java.lang.String

Set a custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#custom_webhook_template ProjectHook#custom_webhook_template}

---

##### `deploymentEvents`<sup>Optional</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.deploymentEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#deployment_events ProjectHook#deployment_events}

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.enableSslVerification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable ssl verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#enable_ssl_verification ProjectHook#enable_ssl_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#id ProjectHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.issuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#issues_events ProjectHook#issues_events}

---

##### `jobEvents`<sup>Optional</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.jobEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#job_events ProjectHook#job_events}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#merge_requests_events ProjectHook#merge_requests_events}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.noteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#note_events ProjectHook#note_events}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pipelineEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#pipeline_events ProjectHook#pipeline_events}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#push_events ProjectHook#push_events}

---

##### `pushEventsBranchFilter`<sup>Optional</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.pushEventsBranchFilter"></a>

- *Type:* java.lang.String

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#push_events_branch_filter ProjectHook#push_events_branch_filter}

---

##### `releasesEvents`<sup>Optional</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.releasesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for releases events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#releases_events ProjectHook#releases_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.tagPushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#tag_push_events ProjectHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.token"></a>

- *Type:* java.lang.String

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#token ProjectHook#token}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.wikiPageEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#wiki_page_events ProjectHook#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialIssuesEvents">resetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialNoteEvents">resetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomWebhookTemplate">resetCustomWebhookTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetDeploymentEvents">resetDeploymentEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetEnableSslVerification">resetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetIssuesEvents">resetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetJobEvents">resetJobEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetNoteEvents">resetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPipelineEvents">resetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEventsBranchFilter">resetPushEventsBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetReleasesEvents">resetReleasesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetWikiPageEvents">resetWikiPageEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectHook.ProjectHook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConfidentialIssuesEvents` <a name="resetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialIssuesEvents"></a>

```java
public void resetConfidentialIssuesEvents()
```

##### `resetConfidentialNoteEvents` <a name="resetConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialNoteEvents"></a>

```java
public void resetConfidentialNoteEvents()
```

##### `resetCustomWebhookTemplate` <a name="resetCustomWebhookTemplate" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomWebhookTemplate"></a>

```java
public void resetCustomWebhookTemplate()
```

##### `resetDeploymentEvents` <a name="resetDeploymentEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetDeploymentEvents"></a>

```java
public void resetDeploymentEvents()
```

##### `resetEnableSslVerification` <a name="resetEnableSslVerification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetEnableSslVerification"></a>

```java
public void resetEnableSslVerification()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetId"></a>

```java
public void resetId()
```

##### `resetIssuesEvents` <a name="resetIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetIssuesEvents"></a>

```java
public void resetIssuesEvents()
```

##### `resetJobEvents` <a name="resetJobEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetJobEvents"></a>

```java
public void resetJobEvents()
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetMergeRequestsEvents"></a>

```java
public void resetMergeRequestsEvents()
```

##### `resetNoteEvents` <a name="resetNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetNoteEvents"></a>

```java
public void resetNoteEvents()
```

##### `resetPipelineEvents` <a name="resetPipelineEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPipelineEvents"></a>

```java
public void resetPipelineEvents()
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEvents"></a>

```java
public void resetPushEvents()
```

##### `resetPushEventsBranchFilter` <a name="resetPushEventsBranchFilter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEventsBranchFilter"></a>

```java
public void resetPushEventsBranchFilter()
```

##### `resetReleasesEvents` <a name="resetReleasesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetReleasesEvents"></a>

```java
public void resetReleasesEvents()
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetTagPushEvents"></a>

```java
public void resetTagPushEvents()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetToken"></a>

```java
public void resetToken()
```

##### `resetWikiPageEvents` <a name="resetWikiPageEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetWikiPageEvents"></a>

```java
public void resetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectHook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_hook.ProjectHook;

ProjectHook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_hook.ProjectHook;

ProjectHook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_hook.ProjectHook;

ProjectHook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_hook.ProjectHook;

ProjectHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectHook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.hookId">hookId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectId">projectId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEventsInput">confidentialIssuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEventsInput">confidentialNoteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplateInput">customWebhookTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEventsInput">deploymentEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerificationInput">enableSslVerificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEventsInput">issuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEventsInput">jobEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEventsInput">noteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEventsInput">pipelineEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilterInput">pushEventsBranchFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsInput">pushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEventsInput">releasesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEventsInput">wikiPageEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplate">customWebhookTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEvents">deploymentEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEvents">jobEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEvents">releasesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.hookId"></a>

```java
public java.lang.Number getHookId();
```

- *Type:* java.lang.Number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectId"></a>

```java
public java.lang.Number getProjectId();
```

- *Type:* java.lang.Number

---

##### `confidentialIssuesEventsInput`<sup>Optional</sup> <a name="confidentialIssuesEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEventsInput"></a>

```java
public java.lang.Object getConfidentialIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteEventsInput`<sup>Optional</sup> <a name="confidentialNoteEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEventsInput"></a>

```java
public java.lang.Object getConfidentialNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customWebhookTemplateInput`<sup>Optional</sup> <a name="customWebhookTemplateInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplateInput"></a>

```java
public java.lang.String getCustomWebhookTemplateInput();
```

- *Type:* java.lang.String

---

##### `deploymentEventsInput`<sup>Optional</sup> <a name="deploymentEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEventsInput"></a>

```java
public java.lang.Object getDeploymentEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSslVerificationInput`<sup>Optional</sup> <a name="enableSslVerificationInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerificationInput"></a>

```java
public java.lang.Object getEnableSslVerificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuesEventsInput`<sup>Optional</sup> <a name="issuesEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEventsInput"></a>

```java
public java.lang.Object getIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jobEventsInput`<sup>Optional</sup> <a name="jobEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEventsInput"></a>

```java
public java.lang.Object getJobEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEventsInput"></a>

```java
public java.lang.Object getMergeRequestsEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteEventsInput`<sup>Optional</sup> <a name="noteEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEventsInput"></a>

```java
public java.lang.Object getNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineEventsInput`<sup>Optional</sup> <a name="pipelineEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEventsInput"></a>

```java
public java.lang.Object getPipelineEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushEventsBranchFilterInput`<sup>Optional</sup> <a name="pushEventsBranchFilterInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilterInput"></a>

```java
public java.lang.String getPushEventsBranchFilterInput();
```

- *Type:* java.lang.String

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsInput"></a>

```java
public java.lang.Object getPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `releasesEventsInput`<sup>Optional</sup> <a name="releasesEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEventsInput"></a>

```java
public java.lang.Object getReleasesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEventsInput"></a>

```java
public java.lang.Object getTagPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `wikiPageEventsInput`<sup>Optional</sup> <a name="wikiPageEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEventsInput"></a>

```java
public java.lang.Object getWikiPageEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialIssuesEvents`<sup>Required</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteEvents`<sup>Required</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customWebhookTemplate`<sup>Required</sup> <a name="customWebhookTemplate" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplate"></a>

```java
public java.lang.String getCustomWebhookTemplate();
```

- *Type:* java.lang.String

---

##### `deploymentEvents`<sup>Required</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEvents"></a>

```java
public java.lang.Object getDeploymentEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSslVerification`<sup>Required</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerification"></a>

```java
public java.lang.Object getEnableSslVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuesEvents`<sup>Required</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jobEvents`<sup>Required</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEvents"></a>

```java
public java.lang.Object getJobEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteEvents`<sup>Required</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineEvents`<sup>Required</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pushEventsBranchFilter`<sup>Required</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilter"></a>

```java
public java.lang.String getPushEventsBranchFilter();
```

- *Type:* java.lang.String

---

##### `releasesEvents`<sup>Required</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEvents"></a>

```java
public java.lang.Object getReleasesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `wikiPageEvents`<sup>Required</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectHookConfig <a name="ProjectHookConfig" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_hook.ProjectHookConfig;

ProjectHookConfig.builder()
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
    .project(java.lang.String)
    .url(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean)
//  .confidentialIssuesEvents(IResolvable)
//  .confidentialNoteEvents(java.lang.Boolean)
//  .confidentialNoteEvents(IResolvable)
//  .customWebhookTemplate(java.lang.String)
//  .deploymentEvents(java.lang.Boolean)
//  .deploymentEvents(IResolvable)
//  .enableSslVerification(java.lang.Boolean)
//  .enableSslVerification(IResolvable)
//  .id(java.lang.String)
//  .issuesEvents(java.lang.Boolean)
//  .issuesEvents(IResolvable)
//  .jobEvents(java.lang.Boolean)
//  .jobEvents(IResolvable)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .noteEvents(java.lang.Boolean)
//  .noteEvents(IResolvable)
//  .pipelineEvents(java.lang.Boolean)
//  .pipelineEvents(IResolvable)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .pushEventsBranchFilter(java.lang.String)
//  .releasesEvents(java.lang.Boolean)
//  .releasesEvents(IResolvable)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
//  .token(java.lang.String)
//  .wikiPageEvents(java.lang.Boolean)
//  .wikiPageEvents(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.url">url</a></code> | <code>java.lang.String</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential notes events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customWebhookTemplate">customWebhookTemplate</a></code> | <code>java.lang.String</code> | Set a custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.deploymentEvents">deploymentEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable ssl verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#id ProjectHook#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.jobEvents">jobEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for notes events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>java.lang.String</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.releasesEvents">releasesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for releases events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.token">token</a></code> | <code>java.lang.String</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name or id of the project to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#project ProjectHook#project}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#url ProjectHook#url}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#confidential_issues_events ProjectHook#confidential_issues_events}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#confidential_note_events ProjectHook#confidential_note_events}

---

##### `customWebhookTemplate`<sup>Optional</sup> <a name="customWebhookTemplate" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customWebhookTemplate"></a>

```java
public java.lang.String getCustomWebhookTemplate();
```

- *Type:* java.lang.String

Set a custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#custom_webhook_template ProjectHook#custom_webhook_template}

---

##### `deploymentEvents`<sup>Optional</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.deploymentEvents"></a>

```java
public java.lang.Object getDeploymentEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#deployment_events ProjectHook#deployment_events}

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.enableSslVerification"></a>

```java
public java.lang.Object getEnableSslVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable ssl verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#enable_ssl_verification ProjectHook#enable_ssl_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#id ProjectHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#issues_events ProjectHook#issues_events}

---

##### `jobEvents`<sup>Optional</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.jobEvents"></a>

```java
public java.lang.Object getJobEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#job_events ProjectHook#job_events}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#merge_requests_events ProjectHook#merge_requests_events}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#note_events ProjectHook#note_events}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#pipeline_events ProjectHook#pipeline_events}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#push_events ProjectHook#push_events}

---

##### `pushEventsBranchFilter`<sup>Optional</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEventsBranchFilter"></a>

```java
public java.lang.String getPushEventsBranchFilter();
```

- *Type:* java.lang.String

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#push_events_branch_filter ProjectHook#push_events_branch_filter}

---

##### `releasesEvents`<sup>Optional</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.releasesEvents"></a>

```java
public java.lang.Object getReleasesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for releases events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#releases_events ProjectHook#releases_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#tag_push_events ProjectHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#token ProjectHook#token}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_hook#wiki_page_events ProjectHook#wiki_page_events}

---



