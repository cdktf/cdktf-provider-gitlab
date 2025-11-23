# `groupHook` Submodule <a name="`groupHook` Submodule" id="@cdktf/provider-gitlab.groupHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupHook <a name="GroupHook" id="@cdktf/provider-gitlab.groupHook.GroupHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook gitlab_group_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHook;

GroupHook.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .group(java.lang.String)
    .url(java.lang.String)
//  .branchFilterStrategy(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean|IResolvable)
//  .confidentialNoteEvents(java.lang.Boolean|IResolvable)
//  .customHeaders(IResolvable|java.util.List<GroupHookCustomHeaders>)
//  .customWebhookTemplate(java.lang.String)
//  .deploymentEvents(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .emojiEvents(java.lang.Boolean|IResolvable)
//  .enableSslVerification(java.lang.Boolean|IResolvable)
//  .featureFlagEvents(java.lang.Boolean|IResolvable)
//  .issuesEvents(java.lang.Boolean|IResolvable)
//  .jobEvents(java.lang.Boolean|IResolvable)
//  .mergeRequestsEvents(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .noteEvents(java.lang.Boolean|IResolvable)
//  .pipelineEvents(java.lang.Boolean|IResolvable)
//  .pushEvents(java.lang.Boolean|IResolvable)
//  .pushEventsBranchFilter(java.lang.String)
//  .releasesEvents(java.lang.Boolean|IResolvable)
//  .subgroupEvents(java.lang.Boolean|IResolvable)
//  .tagPushEvents(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .wikiPageEvents(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | The full path or id of the group to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.branchFilterStrategy">branchFilterStrategy</a></code> | <code>java.lang.String</code> | Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customHeaders">customHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>></code> | Custom headers for the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customWebhookTemplate">customWebhookTemplate</a></code> | <code>java.lang.String</code> | Custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.deploymentEvents">deploymentEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.emojiEvents">emojiEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for emoji events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable SSL verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.featureFlagEvents">featureFlagEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for feature flag events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.jobEvents">jobEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>java.lang.String</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.releasesEvents">releasesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for release events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.subgroupEvents">subgroupEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for subgroup events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.group"></a>

- *Type:* java.lang.String

The full path or id of the group to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#group GroupHook#group}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#url GroupHook#url}

---

##### `branchFilterStrategy`<sup>Optional</sup> <a name="branchFilterStrategy" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.branchFilterStrategy"></a>

- *Type:* java.lang.String

Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#branch_filter_strategy GroupHook#branch_filter_strategy}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#confidential_issues_events GroupHook#confidential_issues_events}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#confidential_note_events GroupHook#confidential_note_events}

---

##### `customHeaders`<sup>Optional</sup> <a name="customHeaders" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customHeaders"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>>

Custom headers for the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#custom_headers GroupHook#custom_headers}

---

##### `customWebhookTemplate`<sup>Optional</sup> <a name="customWebhookTemplate" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.customWebhookTemplate"></a>

- *Type:* java.lang.String

Custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#custom_webhook_template GroupHook#custom_webhook_template}

---

##### `deploymentEvents`<sup>Optional</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.deploymentEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#deployment_events GroupHook#deployment_events}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#description GroupHook#description}

---

##### `emojiEvents`<sup>Optional</sup> <a name="emojiEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.emojiEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for emoji events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#emoji_events GroupHook#emoji_events}

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.enableSslVerification"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable SSL verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#enable_ssl_verification GroupHook#enable_ssl_verification}

---

##### `featureFlagEvents`<sup>Optional</sup> <a name="featureFlagEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.featureFlagEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for feature flag events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#feature_flag_events GroupHook#feature_flag_events}

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.issuesEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#issues_events GroupHook#issues_events}

---

##### `jobEvents`<sup>Optional</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.jobEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#job_events GroupHook#job_events}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#merge_requests_events GroupHook#merge_requests_events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#name GroupHook#name}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.noteEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#note_events GroupHook#note_events}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pipelineEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#pipeline_events GroupHook#pipeline_events}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#push_events GroupHook#push_events}

---

##### `pushEventsBranchFilter`<sup>Optional</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.pushEventsBranchFilter"></a>

- *Type:* java.lang.String

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#push_events_branch_filter GroupHook#push_events_branch_filter}

---

##### `releasesEvents`<sup>Optional</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.releasesEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for release events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#releases_events GroupHook#releases_events}

---

##### `subgroupEvents`<sup>Optional</sup> <a name="subgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.subgroupEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for subgroup events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#subgroup_events GroupHook#subgroup_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.tagPushEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#tag_push_events GroupHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.token"></a>

- *Type:* java.lang.String

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#token GroupHook#token}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.wikiPageEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#wiki_page_events GroupHook#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.putCustomHeaders">putCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetBranchFilterStrategy">resetBranchFilterStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents">resetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents">resetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomHeaders">resetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomWebhookTemplate">resetCustomWebhookTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents">resetDeploymentEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetEmojiEvents">resetEmojiEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification">resetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetFeatureFlagEvents">resetFeatureFlagEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents">resetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents">resetJobEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents">resetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents">resetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter">resetPushEventsBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents">resetReleasesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents">resetSubgroupEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents">resetWikiPageEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupHook.GroupHook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupHook.GroupHook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupHook.GroupHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupHook.GroupHook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomHeaders` <a name="putCustomHeaders" id="@cdktf/provider-gitlab.groupHook.GroupHook.putCustomHeaders"></a>

```java
public void putCustomHeaders(IResolvable|java.util.List<GroupHookCustomHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHook.putCustomHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>>

---

##### `resetBranchFilterStrategy` <a name="resetBranchFilterStrategy" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetBranchFilterStrategy"></a>

```java
public void resetBranchFilterStrategy()
```

##### `resetConfidentialIssuesEvents` <a name="resetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents"></a>

```java
public void resetConfidentialIssuesEvents()
```

##### `resetConfidentialNoteEvents` <a name="resetConfidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents"></a>

```java
public void resetConfidentialNoteEvents()
```

##### `resetCustomHeaders` <a name="resetCustomHeaders" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomHeaders"></a>

```java
public void resetCustomHeaders()
```

##### `resetCustomWebhookTemplate` <a name="resetCustomWebhookTemplate" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetCustomWebhookTemplate"></a>

```java
public void resetCustomWebhookTemplate()
```

##### `resetDeploymentEvents` <a name="resetDeploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents"></a>

```java
public void resetDeploymentEvents()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmojiEvents` <a name="resetEmojiEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetEmojiEvents"></a>

```java
public void resetEmojiEvents()
```

##### `resetEnableSslVerification` <a name="resetEnableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification"></a>

```java
public void resetEnableSslVerification()
```

##### `resetFeatureFlagEvents` <a name="resetFeatureFlagEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetFeatureFlagEvents"></a>

```java
public void resetFeatureFlagEvents()
```

##### `resetIssuesEvents` <a name="resetIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents"></a>

```java
public void resetIssuesEvents()
```

##### `resetJobEvents` <a name="resetJobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents"></a>

```java
public void resetJobEvents()
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents"></a>

```java
public void resetMergeRequestsEvents()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetName"></a>

```java
public void resetName()
```

##### `resetNoteEvents` <a name="resetNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents"></a>

```java
public void resetNoteEvents()
```

##### `resetPipelineEvents` <a name="resetPipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents"></a>

```java
public void resetPipelineEvents()
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents"></a>

```java
public void resetPushEvents()
```

##### `resetPushEventsBranchFilter` <a name="resetPushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter"></a>

```java
public void resetPushEventsBranchFilter()
```

##### `resetReleasesEvents` <a name="resetReleasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents"></a>

```java
public void resetReleasesEvents()
```

##### `resetSubgroupEvents` <a name="resetSubgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents"></a>

```java
public void resetSubgroupEvents()
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents"></a>

```java
public void resetTagPushEvents()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetToken"></a>

```java
public void resetToken()
```

##### `resetWikiPageEvents` <a name="resetWikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents"></a>

```java
public void resetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupHook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHook;

GroupHook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHook;

GroupHook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHook;

GroupHook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHook;

GroupHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GroupHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GroupHook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GroupHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GroupHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GroupHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeaders">customHeaders</a></code> | <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList">GroupHookCustomHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId">hookId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategyInput">branchFilterStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput">confidentialIssuesEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput">confidentialNoteEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeadersInput">customHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplateInput">customWebhookTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput">deploymentEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.emojiEventsInput">emojiEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput">enableSslVerificationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEventsInput">featureFlagEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput">issuesEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput">jobEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput">noteEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput">pipelineEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput">pushEventsBranchFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput">pushEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput">releasesEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput">subgroupEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput">wikiPageEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategy">branchFilterStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplate">customWebhookTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents">deploymentEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.emojiEvents">emojiEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEvents">featureFlagEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents">jobEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents">releasesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents">subgroupEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeaders"></a>

```java
public GroupHookCustomHeadersList getCustomHeaders();
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList">GroupHookCustomHeadersList</a>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId"></a>

```java
public java.lang.Number getHookId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `branchFilterStrategyInput`<sup>Optional</sup> <a name="branchFilterStrategyInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategyInput"></a>

```java
public java.lang.String getBranchFilterStrategyInput();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEventsInput`<sup>Optional</sup> <a name="confidentialIssuesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getConfidentialIssuesEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteEventsInput`<sup>Optional</sup> <a name="confidentialNoteEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getConfidentialNoteEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `customHeadersInput`<sup>Optional</sup> <a name="customHeadersInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customHeadersInput"></a>

```java
public IResolvable|java.util.List<GroupHookCustomHeaders> getCustomHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>>

---

##### `customWebhookTemplateInput`<sup>Optional</sup> <a name="customWebhookTemplateInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplateInput"></a>

```java
public java.lang.String getCustomWebhookTemplateInput();
```

- *Type:* java.lang.String

---

##### `deploymentEventsInput`<sup>Optional</sup> <a name="deploymentEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getDeploymentEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emojiEventsInput`<sup>Optional</sup> <a name="emojiEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.emojiEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getEmojiEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableSslVerificationInput`<sup>Optional</sup> <a name="enableSslVerificationInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSslVerificationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `featureFlagEventsInput`<sup>Optional</sup> <a name="featureFlagEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getFeatureFlagEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `issuesEventsInput`<sup>Optional</sup> <a name="issuesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getIssuesEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jobEventsInput`<sup>Optional</sup> <a name="jobEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getJobEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestsEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `noteEventsInput`<sup>Optional</sup> <a name="noteEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getNoteEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pipelineEventsInput`<sup>Optional</sup> <a name="pipelineEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getPipelineEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pushEventsBranchFilterInput`<sup>Optional</sup> <a name="pushEventsBranchFilterInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput"></a>

```java
public java.lang.String getPushEventsBranchFilterInput();
```

- *Type:* java.lang.String

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getPushEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `releasesEventsInput`<sup>Optional</sup> <a name="releasesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getReleasesEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `subgroupEventsInput`<sup>Optional</sup> <a name="subgroupEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getSubgroupEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getTagPushEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `wikiPageEventsInput`<sup>Optional</sup> <a name="wikiPageEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getWikiPageEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `branchFilterStrategy`<sup>Required</sup> <a name="branchFilterStrategy" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.branchFilterStrategy"></a>

```java
public java.lang.String getBranchFilterStrategy();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEvents`<sup>Required</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents"></a>

```java
public java.lang.Boolean|IResolvable getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteEvents`<sup>Required</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents"></a>

```java
public java.lang.Boolean|IResolvable getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `customWebhookTemplate`<sup>Required</sup> <a name="customWebhookTemplate" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.customWebhookTemplate"></a>

```java
public java.lang.String getCustomWebhookTemplate();
```

- *Type:* java.lang.String

---

##### `deploymentEvents`<sup>Required</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents"></a>

```java
public java.lang.Boolean|IResolvable getDeploymentEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emojiEvents`<sup>Required</sup> <a name="emojiEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.emojiEvents"></a>

```java
public java.lang.Boolean|IResolvable getEmojiEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableSslVerification`<sup>Required</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification"></a>

```java
public java.lang.Boolean|IResolvable getEnableSslVerification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `featureFlagEvents`<sup>Required</sup> <a name="featureFlagEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.featureFlagEvents"></a>

```java
public java.lang.Boolean|IResolvable getFeatureFlagEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `issuesEvents`<sup>Required</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents"></a>

```java
public java.lang.Boolean|IResolvable getIssuesEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jobEvents`<sup>Required</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents"></a>

```java
public java.lang.Boolean|IResolvable getJobEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `noteEvents`<sup>Required</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents"></a>

```java
public java.lang.Boolean|IResolvable getNoteEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pipelineEvents`<sup>Required</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents"></a>

```java
public java.lang.Boolean|IResolvable getPipelineEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents"></a>

```java
public java.lang.Boolean|IResolvable getPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pushEventsBranchFilter`<sup>Required</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter"></a>

```java
public java.lang.String getPushEventsBranchFilter();
```

- *Type:* java.lang.String

---

##### `releasesEvents`<sup>Required</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents"></a>

```java
public java.lang.Boolean|IResolvable getReleasesEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `subgroupEvents`<sup>Required</sup> <a name="subgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents"></a>

```java
public java.lang.Boolean|IResolvable getSubgroupEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents"></a>

```java
public java.lang.Boolean|IResolvable getTagPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `wikiPageEvents`<sup>Required</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents"></a>

```java
public java.lang.Boolean|IResolvable getWikiPageEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroupHookConfig <a name="GroupHookConfig" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHookConfig;

GroupHookConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .group(java.lang.String)
    .url(java.lang.String)
//  .branchFilterStrategy(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean|IResolvable)
//  .confidentialNoteEvents(java.lang.Boolean|IResolvable)
//  .customHeaders(IResolvable|java.util.List<GroupHookCustomHeaders>)
//  .customWebhookTemplate(java.lang.String)
//  .deploymentEvents(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .emojiEvents(java.lang.Boolean|IResolvable)
//  .enableSslVerification(java.lang.Boolean|IResolvable)
//  .featureFlagEvents(java.lang.Boolean|IResolvable)
//  .issuesEvents(java.lang.Boolean|IResolvable)
//  .jobEvents(java.lang.Boolean|IResolvable)
//  .mergeRequestsEvents(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .noteEvents(java.lang.Boolean|IResolvable)
//  .pipelineEvents(java.lang.Boolean|IResolvable)
//  .pushEvents(java.lang.Boolean|IResolvable)
//  .pushEventsBranchFilter(java.lang.String)
//  .releasesEvents(java.lang.Boolean|IResolvable)
//  .subgroupEvents(java.lang.Boolean|IResolvable)
//  .tagPushEvents(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .wikiPageEvents(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group">group</a></code> | <code>java.lang.String</code> | The full path or id of the group to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url">url</a></code> | <code>java.lang.String</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.branchFilterStrategy">branchFilterStrategy</a></code> | <code>java.lang.String</code> | Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customHeaders">customHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>></code> | Custom headers for the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customWebhookTemplate">customWebhookTemplate</a></code> | <code>java.lang.String</code> | Custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents">deploymentEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.emojiEvents">emojiEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for emoji events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable SSL verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.featureFlagEvents">featureFlagEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for feature flag events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents">jobEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the group webhook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for note events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter">pushEventsBranchFilter</a></code> | <code>java.lang.String</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents">releasesEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for release events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents">subgroupEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for subgroup events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token">token</a></code> | <code>java.lang.String</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Invoke the hook for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The full path or id of the group to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#group GroupHook#group}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#url GroupHook#url}

---

##### `branchFilterStrategy`<sup>Optional</sup> <a name="branchFilterStrategy" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.branchFilterStrategy"></a>

```java
public java.lang.String getBranchFilterStrategy();
```

- *Type:* java.lang.String

Filter push events by branch. Valid values are: `wildcard`, `regex`, `all_branches`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#branch_filter_strategy GroupHook#branch_filter_strategy}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents"></a>

```java
public java.lang.Boolean|IResolvable getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#confidential_issues_events GroupHook#confidential_issues_events}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents"></a>

```java
public java.lang.Boolean|IResolvable getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#confidential_note_events GroupHook#confidential_note_events}

---

##### `customHeaders`<sup>Optional</sup> <a name="customHeaders" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customHeaders"></a>

```java
public IResolvable|java.util.List<GroupHookCustomHeaders> getCustomHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>>

Custom headers for the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#custom_headers GroupHook#custom_headers}

---

##### `customWebhookTemplate`<sup>Optional</sup> <a name="customWebhookTemplate" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.customWebhookTemplate"></a>

```java
public java.lang.String getCustomWebhookTemplate();
```

- *Type:* java.lang.String

Custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#custom_webhook_template GroupHook#custom_webhook_template}

---

##### `deploymentEvents`<sup>Optional</sup> <a name="deploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents"></a>

```java
public java.lang.Boolean|IResolvable getDeploymentEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#deployment_events GroupHook#deployment_events}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#description GroupHook#description}

---

##### `emojiEvents`<sup>Optional</sup> <a name="emojiEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.emojiEvents"></a>

```java
public java.lang.Boolean|IResolvable getEmojiEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for emoji events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#emoji_events GroupHook#emoji_events}

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification"></a>

```java
public java.lang.Boolean|IResolvable getEnableSslVerification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable SSL verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#enable_ssl_verification GroupHook#enable_ssl_verification}

---

##### `featureFlagEvents`<sup>Optional</sup> <a name="featureFlagEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.featureFlagEvents"></a>

```java
public java.lang.Boolean|IResolvable getFeatureFlagEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for feature flag events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#feature_flag_events GroupHook#feature_flag_events}

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents"></a>

```java
public java.lang.Boolean|IResolvable getIssuesEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#issues_events GroupHook#issues_events}

---

##### `jobEvents`<sup>Optional</sup> <a name="jobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents"></a>

```java
public java.lang.Boolean|IResolvable getJobEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#job_events GroupHook#job_events}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#merge_requests_events GroupHook#merge_requests_events}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the group webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#name GroupHook#name}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents"></a>

```java
public java.lang.Boolean|IResolvable getNoteEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#note_events GroupHook#note_events}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents"></a>

```java
public java.lang.Boolean|IResolvable getPipelineEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#pipeline_events GroupHook#pipeline_events}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents"></a>

```java
public java.lang.Boolean|IResolvable getPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#push_events GroupHook#push_events}

---

##### `pushEventsBranchFilter`<sup>Optional</sup> <a name="pushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter"></a>

```java
public java.lang.String getPushEventsBranchFilter();
```

- *Type:* java.lang.String

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#push_events_branch_filter GroupHook#push_events_branch_filter}

---

##### `releasesEvents`<sup>Optional</sup> <a name="releasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents"></a>

```java
public java.lang.Boolean|IResolvable getReleasesEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for release events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#releases_events GroupHook#releases_events}

---

##### `subgroupEvents`<sup>Optional</sup> <a name="subgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents"></a>

```java
public java.lang.Boolean|IResolvable getSubgroupEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for subgroup events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#subgroup_events GroupHook#subgroup_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents"></a>

```java
public java.lang.Boolean|IResolvable getTagPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#tag_push_events GroupHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#token GroupHook#token}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents"></a>

```java
public java.lang.Boolean|IResolvable getWikiPageEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#wiki_page_events GroupHook#wiki_page_events}

---

### GroupHookCustomHeaders <a name="GroupHookCustomHeaders" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHookCustomHeaders;

GroupHookCustomHeaders.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.key">key</a></code> | <code>java.lang.String</code> | Key of the custom header. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Value of the custom header. This value cannot be imported. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key of the custom header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#key GroupHook#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the custom header. This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_hook#value GroupHook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupHookCustomHeadersList <a name="GroupHookCustomHeadersList" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHookCustomHeadersList;

new GroupHookCustomHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.get"></a>

```java
public GroupHookCustomHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GroupHookCustomHeaders> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>>

---


### GroupHookCustomHeadersOutputReference <a name="GroupHookCustomHeadersOutputReference" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_hook.GroupHookCustomHeadersOutputReference;

new GroupHookCustomHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.groupHook.GroupHookCustomHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|GroupHookCustomHeaders getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupHook.GroupHookCustomHeaders">GroupHookCustomHeaders</a>

---



