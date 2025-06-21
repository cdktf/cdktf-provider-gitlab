# `dataGitlabProjectMergeRequests` Submodule <a name="`dataGitlabProjectMergeRequests` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMergeRequests <a name="DataGitlabProjectMergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests gitlab_project_merge_requests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequests;

DataGitlabProjectMergeRequests.Builder.create(Construct scope, java.lang.String id)
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
//  .authorId(java.lang.Number)
//  .authorUsername(java.lang.String)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .iids(java.util.List<java.lang.Number>)
//  .milestone(java.lang.String)
//  .myReactionEmoji(java.lang.String)
//  .orderBy(java.lang.String)
//  .reviewerUsername(java.lang.String)
//  .scope(java.lang.String)
//  .search(java.lang.String)
//  .sort(java.lang.String)
//  .sourceBranch(java.lang.String)
//  .state(java.lang.String)
//  .targetBranch(java.lang.String)
//  .updatedAfter(java.lang.String)
//  .updatedBefore(java.lang.String)
//  .wip(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.authorId">authorId</a></code> | <code>java.lang.Number</code> | Return merge requests created by the given user ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.authorUsername">authorUsername</a></code> | <code>java.lang.String</code> | Return merge requests created by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.iids">iids</a></code> | <code>java.util.List<java.lang.Number></code> | The unique internal IDs of the merge requests. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.milestone">milestone</a></code> | <code>java.lang.String</code> | Return only merge requests for a specific milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.myReactionEmoji">myReactionEmoji</a></code> | <code>java.lang.String</code> | Return merge requests reacted to by the authenticated user with the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.reviewerUsername">reviewerUsername</a></code> | <code>java.lang.String</code> | Return merge requests reviewed by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search merge requests against their `title` or `description`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.sort">sort</a></code> | <code>java.lang.String</code> | Return requests sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | Return merge requests with the given source branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Return all merge requests (all) or just those that are opened, closed, locked, or merged. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.targetBranch">targetBranch</a></code> | <code>java.lang.String</code> | Return merge requests with the given target branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.updatedAfter">updatedAfter</a></code> | <code>java.lang.String</code> | Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.updatedBefore">updatedBefore</a></code> | <code>java.lang.String</code> | Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.wip">wip</a></code> | <code>java.lang.String</code> | Filter merge requests against their wip status. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#project DataGitlabProjectMergeRequests#project}

---

##### `authorId`<sup>Optional</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.authorId"></a>

- *Type:* java.lang.Number

Return merge requests created by the given user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#author_id DataGitlabProjectMergeRequests#author_id}

---

##### `authorUsername`<sup>Optional</sup> <a name="authorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.authorUsername"></a>

- *Type:* java.lang.String

Return merge requests created by the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#author_username DataGitlabProjectMergeRequests#author_username}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.createdAfter"></a>

- *Type:* java.lang.String

Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#created_after DataGitlabProjectMergeRequests#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.createdBefore"></a>

- *Type:* java.lang.String

Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#created_before DataGitlabProjectMergeRequests#created_before}

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.iids"></a>

- *Type:* java.util.List<java.lang.Number>

The unique internal IDs of the merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#iids DataGitlabProjectMergeRequests#iids}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.milestone"></a>

- *Type:* java.lang.String

Return only merge requests for a specific milestone.

`None` returns merge requests with no milestone. `Any` returns merge requests that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#milestone DataGitlabProjectMergeRequests#milestone}

---

##### `myReactionEmoji`<sup>Optional</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.myReactionEmoji"></a>

- *Type:* java.lang.String

Return merge requests reacted to by the authenticated user with the given emoji.

`None` returns issues not given a reaction. `Any` returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#my_reaction_emoji DataGitlabProjectMergeRequests#my_reaction_emoji}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.orderBy"></a>

- *Type:* java.lang.String

Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#order_by DataGitlabProjectMergeRequests#order_by}

---

##### `reviewerUsername`<sup>Optional</sup> <a name="reviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.reviewerUsername"></a>

- *Type:* java.lang.String

Return merge requests reviewed by the given username.

`None` returns merge requests with no reviews. `Any` returns merge requests with any reviewer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#reviewer_username DataGitlabProjectMergeRequests#reviewer_username}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#scope DataGitlabProjectMergeRequests#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search merge requests against their `title` or `description`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#search DataGitlabProjectMergeRequests#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.sort"></a>

- *Type:* java.lang.String

Return requests sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#sort DataGitlabProjectMergeRequests#sort}

---

##### `sourceBranch`<sup>Optional</sup> <a name="sourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.sourceBranch"></a>

- *Type:* java.lang.String

Return merge requests with the given source branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#source_branch DataGitlabProjectMergeRequests#source_branch}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Return all merge requests (all) or just those that are opened, closed, locked, or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#state DataGitlabProjectMergeRequests#state}

---

##### `targetBranch`<sup>Optional</sup> <a name="targetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.targetBranch"></a>

- *Type:* java.lang.String

Return merge requests with the given target branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#target_branch DataGitlabProjectMergeRequests#target_branch}

---

##### `updatedAfter`<sup>Optional</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.updatedAfter"></a>

- *Type:* java.lang.String

Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#updated_after DataGitlabProjectMergeRequests#updated_after}

---

##### `updatedBefore`<sup>Optional</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.updatedBefore"></a>

- *Type:* java.lang.String

Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#updated_before DataGitlabProjectMergeRequests#updated_before}

---

##### `wip`<sup>Optional</sup> <a name="wip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.wip"></a>

- *Type:* java.lang.String

Filter merge requests against their wip status.

`yes` to return only draft merge requests, `no` to return non-draft merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#wip DataGitlabProjectMergeRequests#wip}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorId">resetAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorUsername">resetAuthorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetIids">resetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMilestone">resetMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMyReactionEmoji">resetMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetReviewerUsername">resetReviewerUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSourceBranch">resetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetTargetBranch">resetTargetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedAfter">resetUpdatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedBefore">resetUpdatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetWip">resetWip</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAuthorId` <a name="resetAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorId"></a>

```java
public void resetAuthorId()
```

##### `resetAuthorUsername` <a name="resetAuthorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorUsername"></a>

```java
public void resetAuthorUsername()
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedAfter"></a>

```java
public void resetCreatedAfter()
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedBefore"></a>

```java
public void resetCreatedBefore()
```

##### `resetIids` <a name="resetIids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetIids"></a>

```java
public void resetIids()
```

##### `resetMilestone` <a name="resetMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMilestone"></a>

```java
public void resetMilestone()
```

##### `resetMyReactionEmoji` <a name="resetMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMyReactionEmoji"></a>

```java
public void resetMyReactionEmoji()
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetReviewerUsername` <a name="resetReviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetReviewerUsername"></a>

```java
public void resetReviewerUsername()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetScope"></a>

```java
public void resetScope()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSort"></a>

```java
public void resetSort()
```

##### `resetSourceBranch` <a name="resetSourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSourceBranch"></a>

```java
public void resetSourceBranch()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetState"></a>

```java
public void resetState()
```

##### `resetTargetBranch` <a name="resetTargetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetTargetBranch"></a>

```java
public void resetTargetBranch()
```

##### `resetUpdatedAfter` <a name="resetUpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedAfter"></a>

```java
public void resetUpdatedAfter()
```

##### `resetUpdatedBefore` <a name="resetUpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedBefore"></a>

```java
public void resetUpdatedBefore()
```

##### `resetWip` <a name="resetWip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetWip"></a>

```java
public void resetWip()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectMergeRequests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequests;

DataGitlabProjectMergeRequests.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequests;

DataGitlabProjectMergeRequests.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequests;

DataGitlabProjectMergeRequests.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequests;

DataGitlabProjectMergeRequests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabProjectMergeRequests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabProjectMergeRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabProjectMergeRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabProjectMergeRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectMergeRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.mergeRequests">mergeRequests</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList">DataGitlabProjectMergeRequestsMergeRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorIdInput">authorIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsernameInput">authorUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfterInput">createdAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBeforeInput">createdBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iidsInput">iidsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestoneInput">milestoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmojiInput">myReactionEmojiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsernameInput">reviewerUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sortInput">sortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranchInput">sourceBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranchInput">targetBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfterInput">updatedAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBeforeInput">updatedBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wipInput">wipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorId">authorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsername">authorUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iids">iids</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestone">milestone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmoji">myReactionEmoji</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsername">reviewerUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sort">sort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranch">targetBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfter">updatedAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBefore">updatedBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wip">wip</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `mergeRequests`<sup>Required</sup> <a name="mergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.mergeRequests"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsList getMergeRequests();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList">DataGitlabProjectMergeRequestsMergeRequestsList</a>

---

##### `authorIdInput`<sup>Optional</sup> <a name="authorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorIdInput"></a>

```java
public java.lang.Number getAuthorIdInput();
```

- *Type:* java.lang.Number

---

##### `authorUsernameInput`<sup>Optional</sup> <a name="authorUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsernameInput"></a>

```java
public java.lang.String getAuthorUsernameInput();
```

- *Type:* java.lang.String

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfterInput"></a>

```java
public java.lang.String getCreatedAfterInput();
```

- *Type:* java.lang.String

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBeforeInput"></a>

```java
public java.lang.String getCreatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `iidsInput`<sup>Optional</sup> <a name="iidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iidsInput"></a>

```java
public java.util.List<java.lang.Number> getIidsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `milestoneInput`<sup>Optional</sup> <a name="milestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestoneInput"></a>

```java
public java.lang.String getMilestoneInput();
```

- *Type:* java.lang.String

---

##### `myReactionEmojiInput`<sup>Optional</sup> <a name="myReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmojiInput"></a>

```java
public java.lang.String getMyReactionEmojiInput();
```

- *Type:* java.lang.String

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reviewerUsernameInput`<sup>Optional</sup> <a name="reviewerUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsernameInput"></a>

```java
public java.lang.String getReviewerUsernameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sortInput"></a>

```java
public java.lang.String getSortInput();
```

- *Type:* java.lang.String

---

##### `sourceBranchInput`<sup>Optional</sup> <a name="sourceBranchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranchInput"></a>

```java
public java.lang.String getSourceBranchInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetBranchInput`<sup>Optional</sup> <a name="targetBranchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranchInput"></a>

```java
public java.lang.String getTargetBranchInput();
```

- *Type:* java.lang.String

---

##### `updatedAfterInput`<sup>Optional</sup> <a name="updatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfterInput"></a>

```java
public java.lang.String getUpdatedAfterInput();
```

- *Type:* java.lang.String

---

##### `updatedBeforeInput`<sup>Optional</sup> <a name="updatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBeforeInput"></a>

```java
public java.lang.String getUpdatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `wipInput`<sup>Optional</sup> <a name="wipInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wipInput"></a>

```java
public java.lang.String getWipInput();
```

- *Type:* java.lang.String

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorId"></a>

```java
public java.lang.Number getAuthorId();
```

- *Type:* java.lang.Number

---

##### `authorUsername`<sup>Required</sup> <a name="authorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsername"></a>

```java
public java.lang.String getAuthorUsername();
```

- *Type:* java.lang.String

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

---

##### `iids`<sup>Required</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iids"></a>

```java
public java.util.List<java.lang.Number> getIids();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `milestone`<sup>Required</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestone"></a>

```java
public java.lang.String getMilestone();
```

- *Type:* java.lang.String

---

##### `myReactionEmoji`<sup>Required</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmoji"></a>

```java
public java.lang.String getMyReactionEmoji();
```

- *Type:* java.lang.String

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reviewerUsername`<sup>Required</sup> <a name="reviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsername"></a>

```java
public java.lang.String getReviewerUsername();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetBranch`<sup>Required</sup> <a name="targetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranch"></a>

```java
public java.lang.String getTargetBranch();
```

- *Type:* java.lang.String

---

##### `updatedAfter`<sup>Required</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfter"></a>

```java
public java.lang.String getUpdatedAfter();
```

- *Type:* java.lang.String

---

##### `updatedBefore`<sup>Required</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBefore"></a>

```java
public java.lang.String getUpdatedBefore();
```

- *Type:* java.lang.String

---

##### `wip`<sup>Required</sup> <a name="wip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wip"></a>

```java
public java.lang.String getWip();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMergeRequestsConfig <a name="DataGitlabProjectMergeRequestsConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsConfig;

DataGitlabProjectMergeRequestsConfig.builder()
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
//  .authorId(java.lang.Number)
//  .authorUsername(java.lang.String)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .iids(java.util.List<java.lang.Number>)
//  .milestone(java.lang.String)
//  .myReactionEmoji(java.lang.String)
//  .orderBy(java.lang.String)
//  .reviewerUsername(java.lang.String)
//  .scope(java.lang.String)
//  .search(java.lang.String)
//  .sort(java.lang.String)
//  .sourceBranch(java.lang.String)
//  .state(java.lang.String)
//  .targetBranch(java.lang.String)
//  .updatedAfter(java.lang.String)
//  .updatedBefore(java.lang.String)
//  .wip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorId">authorId</a></code> | <code>java.lang.Number</code> | Return merge requests created by the given user ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorUsername">authorUsername</a></code> | <code>java.lang.String</code> | Return merge requests created by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.iids">iids</a></code> | <code>java.util.List<java.lang.Number></code> | The unique internal IDs of the merge requests. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.milestone">milestone</a></code> | <code>java.lang.String</code> | Return only merge requests for a specific milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.myReactionEmoji">myReactionEmoji</a></code> | <code>java.lang.String</code> | Return merge requests reacted to by the authenticated user with the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.reviewerUsername">reviewerUsername</a></code> | <code>java.lang.String</code> | Return merge requests reviewed by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search merge requests against their `title` or `description`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sort">sort</a></code> | <code>java.lang.String</code> | Return requests sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | Return merge requests with the given source branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Return all merge requests (all) or just those that are opened, closed, locked, or merged. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.targetBranch">targetBranch</a></code> | <code>java.lang.String</code> | Return merge requests with the given target branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedAfter">updatedAfter</a></code> | <code>java.lang.String</code> | Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedBefore">updatedBefore</a></code> | <code>java.lang.String</code> | Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.wip">wip</a></code> | <code>java.lang.String</code> | Filter merge requests against their wip status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#project DataGitlabProjectMergeRequests#project}

---

##### `authorId`<sup>Optional</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorId"></a>

```java
public java.lang.Number getAuthorId();
```

- *Type:* java.lang.Number

Return merge requests created by the given user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#author_id DataGitlabProjectMergeRequests#author_id}

---

##### `authorUsername`<sup>Optional</sup> <a name="authorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorUsername"></a>

```java
public java.lang.String getAuthorUsername();
```

- *Type:* java.lang.String

Return merge requests created by the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#author_username DataGitlabProjectMergeRequests#author_username}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#created_after DataGitlabProjectMergeRequests#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#created_before DataGitlabProjectMergeRequests#created_before}

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.iids"></a>

```java
public java.util.List<java.lang.Number> getIids();
```

- *Type:* java.util.List<java.lang.Number>

The unique internal IDs of the merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#iids DataGitlabProjectMergeRequests#iids}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.milestone"></a>

```java
public java.lang.String getMilestone();
```

- *Type:* java.lang.String

Return only merge requests for a specific milestone.

`None` returns merge requests with no milestone. `Any` returns merge requests that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#milestone DataGitlabProjectMergeRequests#milestone}

---

##### `myReactionEmoji`<sup>Optional</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.myReactionEmoji"></a>

```java
public java.lang.String getMyReactionEmoji();
```

- *Type:* java.lang.String

Return merge requests reacted to by the authenticated user with the given emoji.

`None` returns issues not given a reaction. `Any` returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#my_reaction_emoji DataGitlabProjectMergeRequests#my_reaction_emoji}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#order_by DataGitlabProjectMergeRequests#order_by}

---

##### `reviewerUsername`<sup>Optional</sup> <a name="reviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.reviewerUsername"></a>

```java
public java.lang.String getReviewerUsername();
```

- *Type:* java.lang.String

Return merge requests reviewed by the given username.

`None` returns merge requests with no reviews. `Any` returns merge requests with any reviewer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#reviewer_username DataGitlabProjectMergeRequests#reviewer_username}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#scope DataGitlabProjectMergeRequests#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search merge requests against their `title` or `description`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#search DataGitlabProjectMergeRequests#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

Return requests sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#sort DataGitlabProjectMergeRequests#sort}

---

##### `sourceBranch`<sup>Optional</sup> <a name="sourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

Return merge requests with the given source branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#source_branch DataGitlabProjectMergeRequests#source_branch}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Return all merge requests (all) or just those that are opened, closed, locked, or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#state DataGitlabProjectMergeRequests#state}

---

##### `targetBranch`<sup>Optional</sup> <a name="targetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.targetBranch"></a>

```java
public java.lang.String getTargetBranch();
```

- *Type:* java.lang.String

Return merge requests with the given target branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#target_branch DataGitlabProjectMergeRequests#target_branch}

---

##### `updatedAfter`<sup>Optional</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedAfter"></a>

```java
public java.lang.String getUpdatedAfter();
```

- *Type:* java.lang.String

Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#updated_after DataGitlabProjectMergeRequests#updated_after}

---

##### `updatedBefore`<sup>Optional</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedBefore"></a>

```java
public java.lang.String getUpdatedBefore();
```

- *Type:* java.lang.String

Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#updated_before DataGitlabProjectMergeRequests#updated_before}

---

##### `wip`<sup>Optional</sup> <a name="wip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.wip"></a>

```java
public java.lang.String getWip();
```

- *Type:* java.lang.String

Filter merge requests against their wip status.

`yes` to return only draft merge requests, `no` to return non-draft merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/data-sources/project_merge_requests#wip DataGitlabProjectMergeRequests#wip}

---

### DataGitlabProjectMergeRequestsMergeRequests <a name="DataGitlabProjectMergeRequestsMergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequests;

DataGitlabProjectMergeRequestsMergeRequests.builder()
    .build();
```


### DataGitlabProjectMergeRequestsMergeRequestsAssignee <a name="DataGitlabProjectMergeRequestsMergeRequestsAssignee" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsAssignee;

DataGitlabProjectMergeRequestsMergeRequestsAssignee.builder()
    .build();
```


### DataGitlabProjectMergeRequestsMergeRequestsAssignees <a name="DataGitlabProjectMergeRequestsMergeRequestsAssignees" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsAssignees;

DataGitlabProjectMergeRequestsMergeRequestsAssignees.builder()
    .build();
```


### DataGitlabProjectMergeRequestsMergeRequestsAuthor <a name="DataGitlabProjectMergeRequestsMergeRequestsAuthor" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsAuthor;

DataGitlabProjectMergeRequestsMergeRequestsAuthor.builder()
    .build();
```


### DataGitlabProjectMergeRequestsMergeRequestsClosedBy <a name="DataGitlabProjectMergeRequestsMergeRequestsClosedBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy;

DataGitlabProjectMergeRequestsMergeRequestsClosedBy.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference;

new DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee">DataGitlabProjectMergeRequestsMergeRequestsAssignee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsAssignee getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee">DataGitlabProjectMergeRequestsMergeRequestsAssignee</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsAssigneesList <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneesList" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList;

new DataGitlabProjectMergeRequestsMergeRequestsAssigneesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference;

new DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees">DataGitlabProjectMergeRequestsMergeRequestsAssignees</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsAssignees getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees">DataGitlabProjectMergeRequestsMergeRequestsAssignees</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference;

new DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor">DataGitlabProjectMergeRequestsMergeRequestsAuthor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsAuthor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor">DataGitlabProjectMergeRequestsMergeRequestsAuthor</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference;

new DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy">DataGitlabProjectMergeRequestsMergeRequestsClosedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsClosedBy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy">DataGitlabProjectMergeRequestsMergeRequestsClosedBy</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsList <a name="DataGitlabProjectMergeRequestsMergeRequestsList" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsList;

new DataGitlabProjectMergeRequestsMergeRequestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectMergeRequestsMergeRequestsOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_merge_requests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference;

new DataGitlabProjectMergeRequestsMergeRequestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignee">assignee</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignees">assignees</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList">DataGitlabProjectMergeRequestsMergeRequestsAssigneesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.author">author</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.blockingDiscussionsResolved">blockingDiscussionsResolved</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedAt">closedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedBy">closedBy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference">DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.iid">iid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests">DataGitlabProjectMergeRequestsMergeRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignee"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference getAssignee();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference</a>

---

##### `assignees`<sup>Required</sup> <a name="assignees" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignees"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsAssigneesList getAssignees();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList">DataGitlabProjectMergeRequestsMergeRequestsAssigneesList</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.author"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference getAuthor();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference</a>

---

##### `blockingDiscussionsResolved`<sup>Required</sup> <a name="blockingDiscussionsResolved" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.blockingDiscussionsResolved"></a>

```java
public IResolvable getBlockingDiscussionsResolved();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `closedAt`<sup>Required</sup> <a name="closedAt" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedAt"></a>

```java
public java.lang.String getClosedAt();
```

- *Type:* java.lang.String

---

##### `closedBy`<sup>Required</sup> <a name="closedBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedBy"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference getClosedBy();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference">DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.iid"></a>

```java
public java.lang.Number getIid();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectMergeRequestsMergeRequests getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests">DataGitlabProjectMergeRequestsMergeRequests</a>

---



