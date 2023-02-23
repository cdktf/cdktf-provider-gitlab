# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-gitlab.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file gitlab_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.repository_file.RepositoryFile;

RepositoryFile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .branch(java.lang.String)
    .commitMessage(java.lang.String)
    .content(java.lang.String)
    .filePath(java.lang.String)
    .project(java.lang.String)
//  .authorEmail(java.lang.String)
//  .authorName(java.lang.String)
//  .executeFilemode(java.lang.Boolean)
//  .executeFilemode(IResolvable)
//  .id(java.lang.String)
//  .overwriteOnCreate(java.lang.Boolean)
//  .overwriteOnCreate(IResolvable)
//  .startBranch(java.lang.String)
//  .timeouts(RepositoryFileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | Name of the branch to which to commit to. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | File content. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.filePath">filePath</a></code> | <code>java.lang.String</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorEmail">authorEmail</a></code> | <code>java.lang.String</code> | Email of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorName">authorName</a></code> | <code>java.lang.String</code> | Name of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.executeFilemode">executeFilemode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate">overwriteOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable overwriting existing files, defaults to `false`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.startBranch">startBranch</a></code> | <code>java.lang.String</code> | Name of the branch to start the new commit from. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

Name of the branch to which to commit to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#branch RepositoryFile#branch}

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage"></a>

- *Type:* java.lang.String

Commit message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#commit_message RepositoryFile#commit_message}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.content"></a>

- *Type:* java.lang.String

File content.

If the content is not yet base64 encoded, it will be encoded automatically. No other encoding is currently supported, because of a [GitLab API bug](https://gitlab.com/gitlab-org/gitlab/-/issues/342430).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#content RepositoryFile#content}

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.filePath"></a>

- *Type:* java.lang.String

The full path of the file.

It must be relative to the root of the project without a leading slash `/`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#file_path RepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The name or ID of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#project RepositoryFile#project}

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorEmail"></a>

- *Type:* java.lang.String

Email of the commit author.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#author_email RepositoryFile#author_email}

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.authorName"></a>

- *Type:* java.lang.String

Name of the commit author.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#author_name RepositoryFile#author_name}

---

##### `executeFilemode`<sup>Optional</sup> <a name="executeFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.executeFilemode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#execute_filemode RepositoryFile#execute_filemode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteOnCreate`<sup>Optional</sup> <a name="overwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable overwriting existing files, defaults to `false`.

This attribute is only used during `create` and must be use carefully. We suggest to use `imports` whenever possible and limit the use of this attribute for when the project was imported on the same `apply`. This attribute is not supported during a resource import.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

##### `startBranch`<sup>Optional</sup> <a name="startBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.startBranch"></a>

- *Type:* java.lang.String

Name of the branch to start the new commit from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#start_branch RepositoryFile#start_branch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#timeouts RepositoryFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail">resetAuthorEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName">resetAuthorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode">resetExecuteFilemode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate">resetOverwriteOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch">resetStartBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts"></a>

```java
public void putTimeouts(RepositoryFileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

---

##### `resetAuthorEmail` <a name="resetAuthorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail"></a>

```java
public void resetAuthorEmail()
```

##### `resetAuthorName` <a name="resetAuthorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName"></a>

```java
public void resetAuthorName()
```

##### `resetExecuteFilemode` <a name="resetExecuteFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode"></a>

```java
public void resetExecuteFilemode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId"></a>

```java
public void resetId()
```

##### `resetOverwriteOnCreate` <a name="resetOverwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```java
public void resetOverwriteOnCreate()
```

##### `resetStartBranch` <a name="resetStartBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch"></a>

```java
public void resetStartBranch()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.repository_file.RepositoryFile;

RepositoryFile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.repository_file.RepositoryFile;

RepositoryFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.repository_file.RepositoryFile;

RepositoryFile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId">blobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId">commitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256">contentSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId">lastCommitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput">authorEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput">authorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput">commitMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput">executeFilemodeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">overwriteOnCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput">startBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail">authorEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName">authorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode">executeFilemode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch">startBranch</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blobId`<sup>Required</sup> <a name="blobId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId"></a>

```java
public java.lang.String getBlobId();
```

- *Type:* java.lang.String

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId"></a>

```java
public java.lang.String getCommitId();
```

- *Type:* java.lang.String

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256"></a>

```java
public java.lang.String getContentSha256();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `lastCommitId`<sup>Required</sup> <a name="lastCommitId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId"></a>

```java
public java.lang.String getLastCommitId();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts"></a>

```java
public RepositoryFileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a>

---

##### `authorEmailInput`<sup>Optional</sup> <a name="authorEmailInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput"></a>

```java
public java.lang.String getAuthorEmailInput();
```

- *Type:* java.lang.String

---

##### `authorNameInput`<sup>Optional</sup> <a name="authorNameInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput"></a>

```java
public java.lang.String getAuthorNameInput();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commitMessageInput`<sup>Optional</sup> <a name="commitMessageInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```java
public java.lang.String getCommitMessageInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `executeFilemodeInput`<sup>Optional</sup> <a name="executeFilemodeInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput"></a>

```java
public java.lang.Object getExecuteFilemodeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `overwriteOnCreateInput`<sup>Optional</sup> <a name="overwriteOnCreateInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```java
public java.lang.Object getOverwriteOnCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `startBranchInput`<sup>Optional</sup> <a name="startBranchInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput"></a>

```java
public java.lang.String getStartBranchInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail"></a>

```java
public java.lang.String getAuthorEmail();
```

- *Type:* java.lang.String

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName"></a>

```java
public java.lang.String getAuthorName();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `executeFilemode`<sup>Required</sup> <a name="executeFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode"></a>

```java
public java.lang.Object getExecuteFilemode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `overwriteOnCreate`<sup>Required</sup> <a name="overwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```java
public java.lang.Object getOverwriteOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `startBranch`<sup>Required</sup> <a name="startBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch"></a>

```java
public java.lang.String getStartBranch();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.repository_file.RepositoryFileConfig;

RepositoryFileConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .branch(java.lang.String)
    .commitMessage(java.lang.String)
    .content(java.lang.String)
    .filePath(java.lang.String)
    .project(java.lang.String)
//  .authorEmail(java.lang.String)
//  .authorName(java.lang.String)
//  .executeFilemode(java.lang.Boolean)
//  .executeFilemode(IResolvable)
//  .id(java.lang.String)
//  .overwriteOnCreate(java.lang.Boolean)
//  .overwriteOnCreate(IResolvable)
//  .startBranch(java.lang.String)
//  .timeouts(RepositoryFileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch">branch</a></code> | <code>java.lang.String</code> | Name of the branch to which to commit to. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content">content</a></code> | <code>java.lang.String</code> | File content. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath">filePath</a></code> | <code>java.lang.String</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project">project</a></code> | <code>java.lang.String</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail">authorEmail</a></code> | <code>java.lang.String</code> | Email of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName">authorName</a></code> | <code>java.lang.String</code> | Name of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode">executeFilemode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable overwriting existing files, defaults to `false`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch">startBranch</a></code> | <code>java.lang.String</code> | Name of the branch to start the new commit from. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Name of the branch to which to commit to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#branch RepositoryFile#branch}

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

Commit message.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#commit_message RepositoryFile#commit_message}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

File content.

If the content is not yet base64 encoded, it will be encoded automatically. No other encoding is currently supported, because of a [GitLab API bug](https://gitlab.com/gitlab-org/gitlab/-/issues/342430).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#content RepositoryFile#content}

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

The full path of the file.

It must be relative to the root of the project without a leading slash `/`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#file_path RepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name or ID of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#project RepositoryFile#project}

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail"></a>

```java
public java.lang.String getAuthorEmail();
```

- *Type:* java.lang.String

Email of the commit author.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#author_email RepositoryFile#author_email}

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName"></a>

```java
public java.lang.String getAuthorName();
```

- *Type:* java.lang.String

Name of the commit author.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#author_name RepositoryFile#author_name}

---

##### `executeFilemode`<sup>Optional</sup> <a name="executeFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode"></a>

```java
public java.lang.Object getExecuteFilemode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables the execute flag on the file. **Note**: requires GitLab 14.10 or newer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#execute_filemode RepositoryFile#execute_filemode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteOnCreate`<sup>Optional</sup> <a name="overwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```java
public java.lang.Object getOverwriteOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable overwriting existing files, defaults to `false`.

This attribute is only used during `create` and must be use carefully. We suggest to use `imports` whenever possible and limit the use of this attribute for when the project was imported on the same `apply`. This attribute is not supported during a resource import.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

##### `startBranch`<sup>Optional</sup> <a name="startBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch"></a>

```java
public java.lang.String getStartBranch();
```

- *Type:* java.lang.String

Name of the branch to start the new commit from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#start_branch RepositoryFile#start_branch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts"></a>

```java
public RepositoryFileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#timeouts RepositoryFile#timeouts}

---

### RepositoryFileTimeouts <a name="RepositoryFileTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.repository_file.RepositoryFileTimeouts;

RepositoryFileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#create RepositoryFile#create}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#delete RepositoryFile#delete}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#update RepositoryFile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#create RepositoryFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#delete RepositoryFile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/repository_file#update RepositoryFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryFileTimeoutsOutputReference <a name="RepositoryFileTimeoutsOutputReference" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.repository_file.RepositoryFileTimeoutsOutputReference;

new RepositoryFileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


