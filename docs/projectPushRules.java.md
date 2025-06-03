# `projectPushRules` Submodule <a name="`projectPushRules` Submodule" id="@cdktf/provider-gitlab.projectPushRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectPushRulesA <a name="ProjectPushRulesA" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules gitlab_project_push_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_push_rules.ProjectPushRulesA;

ProjectPushRulesA.Builder.create(Construct scope, java.lang.String id)
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
//  .authorEmailRegex(java.lang.String)
//  .branchNameRegex(java.lang.String)
//  .commitCommitterCheck(java.lang.Boolean)
//  .commitCommitterCheck(IResolvable)
//  .commitCommitterNameCheck(java.lang.Boolean)
//  .commitCommitterNameCheck(IResolvable)
//  .commitMessageNegativeRegex(java.lang.String)
//  .commitMessageRegex(java.lang.String)
//  .denyDeleteTag(java.lang.Boolean)
//  .denyDeleteTag(IResolvable)
//  .fileNameRegex(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .memberCheck(java.lang.Boolean)
//  .memberCheck(IResolvable)
//  .preventSecrets(java.lang.Boolean)
//  .preventSecrets(IResolvable)
//  .rejectNonDcoCommits(java.lang.Boolean)
//  .rejectNonDcoCommits(IResolvable)
//  .rejectUnsignedCommits(java.lang.Boolean)
//  .rejectUnsignedCommits(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.authorEmailRegex">authorEmailRegex</a></code> | <code>java.lang.String</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.branchNameRegex">branchNameRegex</a></code> | <code>java.lang.String</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterCheck">commitCommitterCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>java.lang.String</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageRegex">commitMessageRegex</a></code> | <code>java.lang.String</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.denyDeleteTag">denyDeleteTag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.fileNameRegex">fileNameRegex</a></code> | <code>java.lang.String</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.memberCheck">memberCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.preventSecrets">preventSecrets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reject commit when it’s not signed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#project ProjectPushRulesA#project}

---

##### `authorEmailRegex`<sup>Optional</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.authorEmailRegex"></a>

- *Type:* java.lang.String

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#author_email_regex ProjectPushRulesA#author_email_regex}

---

##### `branchNameRegex`<sup>Optional</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.branchNameRegex"></a>

- *Type:* java.lang.String

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#branch_name_regex ProjectPushRulesA#branch_name_regex}

---

##### `commitCommitterCheck`<sup>Optional</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_committer_check ProjectPushRulesA#commit_committer_check}

---

##### `commitCommitterNameCheck`<sup>Optional</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterNameCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_committer_name_check ProjectPushRulesA#commit_committer_name_check}

---

##### `commitMessageNegativeRegex`<sup>Optional</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageNegativeRegex"></a>

- *Type:* java.lang.String

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_message_negative_regex ProjectPushRulesA#commit_message_negative_regex}

---

##### `commitMessageRegex`<sup>Optional</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageRegex"></a>

- *Type:* java.lang.String

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_message_regex ProjectPushRulesA#commit_message_regex}

---

##### `denyDeleteTag`<sup>Optional</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.denyDeleteTag"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#deny_delete_tag ProjectPushRulesA#deny_delete_tag}

---

##### `fileNameRegex`<sup>Optional</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.fileNameRegex"></a>

- *Type:* java.lang.String

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#file_name_regex ProjectPushRulesA#file_name_regex}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.maxFileSize"></a>

- *Type:* java.lang.Number

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#max_file_size ProjectPushRulesA#max_file_size}

---

##### `memberCheck`<sup>Optional</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.memberCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#member_check ProjectPushRulesA#member_check}

---

##### `preventSecrets`<sup>Optional</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.preventSecrets"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#prevent_secrets ProjectPushRulesA#prevent_secrets}

---

##### `rejectNonDcoCommits`<sup>Optional</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectNonDcoCommits"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#reject_non_dco_commits ProjectPushRulesA#reject_non_dco_commits}

---

##### `rejectUnsignedCommits`<sup>Optional</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectUnsignedCommits"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reject commit when it’s not signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#reject_unsigned_commits ProjectPushRulesA#reject_unsigned_commits}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex">resetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex">resetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck">resetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck">resetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex">resetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex">resetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag">resetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex">resetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck">resetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets">resetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits">resetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits">resetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthorEmailRegex` <a name="resetAuthorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex"></a>

```java
public void resetAuthorEmailRegex()
```

##### `resetBranchNameRegex` <a name="resetBranchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex"></a>

```java
public void resetBranchNameRegex()
```

##### `resetCommitCommitterCheck` <a name="resetCommitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck"></a>

```java
public void resetCommitCommitterCheck()
```

##### `resetCommitCommitterNameCheck` <a name="resetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck"></a>

```java
public void resetCommitCommitterNameCheck()
```

##### `resetCommitMessageNegativeRegex` <a name="resetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex"></a>

```java
public void resetCommitMessageNegativeRegex()
```

##### `resetCommitMessageRegex` <a name="resetCommitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex"></a>

```java
public void resetCommitMessageRegex()
```

##### `resetDenyDeleteTag` <a name="resetDenyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag"></a>

```java
public void resetDenyDeleteTag()
```

##### `resetFileNameRegex` <a name="resetFileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex"></a>

```java
public void resetFileNameRegex()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetMemberCheck` <a name="resetMemberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck"></a>

```java
public void resetMemberCheck()
```

##### `resetPreventSecrets` <a name="resetPreventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets"></a>

```java
public void resetPreventSecrets()
```

##### `resetRejectNonDcoCommits` <a name="resetRejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits"></a>

```java
public void resetRejectNonDcoCommits()
```

##### `resetRejectUnsignedCommits` <a name="resetRejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits"></a>

```java
public void resetRejectUnsignedCommits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_push_rules.ProjectPushRulesA;

ProjectPushRulesA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_push_rules.ProjectPushRulesA;

ProjectPushRulesA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_push_rules.ProjectPushRulesA;

ProjectPushRulesA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_push_rules.ProjectPushRulesA;

ProjectPushRulesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectPushRulesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectPushRulesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectPushRulesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectPushRulesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput">authorEmailRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput">branchNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput">commitCommitterCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput">commitCommitterNameCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput">commitMessageNegativeRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput">commitMessageRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput">denyDeleteTagInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput">fileNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput">memberCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput">preventSecretsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput">rejectNonDcoCommitsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput">rejectUnsignedCommitsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex">authorEmailRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex">branchNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex">commitMessageRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag">denyDeleteTag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex">fileNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck">memberCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets">preventSecrets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `authorEmailRegexInput`<sup>Optional</sup> <a name="authorEmailRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput"></a>

```java
public java.lang.String getAuthorEmailRegexInput();
```

- *Type:* java.lang.String

---

##### `branchNameRegexInput`<sup>Optional</sup> <a name="branchNameRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput"></a>

```java
public java.lang.String getBranchNameRegexInput();
```

- *Type:* java.lang.String

---

##### `commitCommitterCheckInput`<sup>Optional</sup> <a name="commitCommitterCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput"></a>

```java
public java.lang.Object getCommitCommitterCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitCommitterNameCheckInput`<sup>Optional</sup> <a name="commitCommitterNameCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput"></a>

```java
public java.lang.Object getCommitCommitterNameCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitMessageNegativeRegexInput`<sup>Optional</sup> <a name="commitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput"></a>

```java
public java.lang.String getCommitMessageNegativeRegexInput();
```

- *Type:* java.lang.String

---

##### `commitMessageRegexInput`<sup>Optional</sup> <a name="commitMessageRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput"></a>

```java
public java.lang.String getCommitMessageRegexInput();
```

- *Type:* java.lang.String

---

##### `denyDeleteTagInput`<sup>Optional</sup> <a name="denyDeleteTagInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput"></a>

```java
public java.lang.Object getDenyDeleteTagInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fileNameRegexInput`<sup>Optional</sup> <a name="fileNameRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput"></a>

```java
public java.lang.String getFileNameRegexInput();
```

- *Type:* java.lang.String

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `memberCheckInput`<sup>Optional</sup> <a name="memberCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput"></a>

```java
public java.lang.Object getMemberCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preventSecretsInput`<sup>Optional</sup> <a name="preventSecretsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput"></a>

```java
public java.lang.Object getPreventSecretsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rejectNonDcoCommitsInput`<sup>Optional</sup> <a name="rejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput"></a>

```java
public java.lang.Object getRejectNonDcoCommitsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rejectUnsignedCommitsInput`<sup>Optional</sup> <a name="rejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput"></a>

```java
public java.lang.Object getRejectUnsignedCommitsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authorEmailRegex`<sup>Required</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex"></a>

```java
public java.lang.String getAuthorEmailRegex();
```

- *Type:* java.lang.String

---

##### `branchNameRegex`<sup>Required</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex"></a>

```java
public java.lang.String getBranchNameRegex();
```

- *Type:* java.lang.String

---

##### `commitCommitterCheck`<sup>Required</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck"></a>

```java
public java.lang.Object getCommitCommitterCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitCommitterNameCheck`<sup>Required</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck"></a>

```java
public java.lang.Object getCommitCommitterNameCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commitMessageNegativeRegex`<sup>Required</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex"></a>

```java
public java.lang.String getCommitMessageNegativeRegex();
```

- *Type:* java.lang.String

---

##### `commitMessageRegex`<sup>Required</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex"></a>

```java
public java.lang.String getCommitMessageRegex();
```

- *Type:* java.lang.String

---

##### `denyDeleteTag`<sup>Required</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag"></a>

```java
public java.lang.Object getDenyDeleteTag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fileNameRegex`<sup>Required</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex"></a>

```java
public java.lang.String getFileNameRegex();
```

- *Type:* java.lang.String

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `memberCheck`<sup>Required</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck"></a>

```java
public java.lang.Object getMemberCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preventSecrets`<sup>Required</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets"></a>

```java
public java.lang.Object getPreventSecrets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rejectNonDcoCommits`<sup>Required</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits"></a>

```java
public java.lang.Object getRejectNonDcoCommits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rejectUnsignedCommits`<sup>Required</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits"></a>

```java
public java.lang.Object getRejectUnsignedCommits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectPushRulesAConfig <a name="ProjectPushRulesAConfig" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_push_rules.ProjectPushRulesAConfig;

ProjectPushRulesAConfig.builder()
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
//  .authorEmailRegex(java.lang.String)
//  .branchNameRegex(java.lang.String)
//  .commitCommitterCheck(java.lang.Boolean)
//  .commitCommitterCheck(IResolvable)
//  .commitCommitterNameCheck(java.lang.Boolean)
//  .commitCommitterNameCheck(IResolvable)
//  .commitMessageNegativeRegex(java.lang.String)
//  .commitMessageRegex(java.lang.String)
//  .denyDeleteTag(java.lang.Boolean)
//  .denyDeleteTag(IResolvable)
//  .fileNameRegex(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .memberCheck(java.lang.Boolean)
//  .memberCheck(IResolvable)
//  .preventSecrets(java.lang.Boolean)
//  .preventSecrets(IResolvable)
//  .rejectNonDcoCommits(java.lang.Boolean)
//  .rejectNonDcoCommits(IResolvable)
//  .rejectUnsignedCommits(java.lang.Boolean)
//  .rejectUnsignedCommits(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex">authorEmailRegex</a></code> | <code>java.lang.String</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex">branchNameRegex</a></code> | <code>java.lang.String</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>java.lang.String</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex">commitMessageRegex</a></code> | <code>java.lang.String</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag">denyDeleteTag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex">fileNameRegex</a></code> | <code>java.lang.String</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck">memberCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets">preventSecrets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reject commit when it’s not signed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#project ProjectPushRulesA#project}

---

##### `authorEmailRegex`<sup>Optional</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex"></a>

```java
public java.lang.String getAuthorEmailRegex();
```

- *Type:* java.lang.String

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#author_email_regex ProjectPushRulesA#author_email_regex}

---

##### `branchNameRegex`<sup>Optional</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex"></a>

```java
public java.lang.String getBranchNameRegex();
```

- *Type:* java.lang.String

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#branch_name_regex ProjectPushRulesA#branch_name_regex}

---

##### `commitCommitterCheck`<sup>Optional</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck"></a>

```java
public java.lang.Object getCommitCommitterCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_committer_check ProjectPushRulesA#commit_committer_check}

---

##### `commitCommitterNameCheck`<sup>Optional</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck"></a>

```java
public java.lang.Object getCommitCommitterNameCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_committer_name_check ProjectPushRulesA#commit_committer_name_check}

---

##### `commitMessageNegativeRegex`<sup>Optional</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex"></a>

```java
public java.lang.String getCommitMessageNegativeRegex();
```

- *Type:* java.lang.String

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_message_negative_regex ProjectPushRulesA#commit_message_negative_regex}

---

##### `commitMessageRegex`<sup>Optional</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex"></a>

```java
public java.lang.String getCommitMessageRegex();
```

- *Type:* java.lang.String

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#commit_message_regex ProjectPushRulesA#commit_message_regex}

---

##### `denyDeleteTag`<sup>Optional</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag"></a>

```java
public java.lang.Object getDenyDeleteTag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#deny_delete_tag ProjectPushRulesA#deny_delete_tag}

---

##### `fileNameRegex`<sup>Optional</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex"></a>

```java
public java.lang.String getFileNameRegex();
```

- *Type:* java.lang.String

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#file_name_regex ProjectPushRulesA#file_name_regex}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#max_file_size ProjectPushRulesA#max_file_size}

---

##### `memberCheck`<sup>Optional</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck"></a>

```java
public java.lang.Object getMemberCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#member_check ProjectPushRulesA#member_check}

---

##### `preventSecrets`<sup>Optional</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets"></a>

```java
public java.lang.Object getPreventSecrets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#prevent_secrets ProjectPushRulesA#prevent_secrets}

---

##### `rejectNonDcoCommits`<sup>Optional</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits"></a>

```java
public java.lang.Object getRejectNonDcoCommits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#reject_non_dco_commits ProjectPushRulesA#reject_non_dco_commits}

---

##### `rejectUnsignedCommits`<sup>Optional</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits"></a>

```java
public java.lang.Object getRejectUnsignedCommits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reject commit when it’s not signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/project_push_rules#reject_unsigned_commits ProjectPushRulesA#reject_unsigned_commits}

---



