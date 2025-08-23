# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-gitlab.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file gitlab_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

new repositoryFile.RepositoryFile(scope: Construct, id: string, config: RepositoryFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail">resetAuthorEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName">resetAuthorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCommitMessage">resetCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCreateCommitMessage">resetCreateCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetDeleteCommitMessage">resetDeleteCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode">resetExecuteFilemode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate">resetOverwriteOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch">resetStartBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetUpdateCommitMessage">resetUpdateCommitMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts"></a>

```typescript
public putTimeouts(value: RepositoryFileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

---

##### `resetAuthorEmail` <a name="resetAuthorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorEmail"></a>

```typescript
public resetAuthorEmail(): void
```

##### `resetAuthorName` <a name="resetAuthorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetAuthorName"></a>

```typescript
public resetAuthorName(): void
```

##### `resetCommitMessage` <a name="resetCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCommitMessage"></a>

```typescript
public resetCommitMessage(): void
```

##### `resetCreateCommitMessage` <a name="resetCreateCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetCreateCommitMessage"></a>

```typescript
public resetCreateCommitMessage(): void
```

##### `resetDeleteCommitMessage` <a name="resetDeleteCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetDeleteCommitMessage"></a>

```typescript
public resetDeleteCommitMessage(): void
```

##### `resetExecuteFilemode` <a name="resetExecuteFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetExecuteFilemode"></a>

```typescript
public resetExecuteFilemode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOverwriteOnCreate` <a name="resetOverwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```typescript
public resetOverwriteOnCreate(): void
```

##### `resetStartBranch` <a name="resetStartBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetStartBranch"></a>

```typescript
public resetStartBranch(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateCommitMessage` <a name="resetUpdateCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.resetUpdateCommitMessage"></a>

```typescript
public resetUpdateCommitMessage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isConstruct"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

repositoryFile.RepositoryFile.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

repositoryFile.RepositoryFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

repositoryFile.RepositoryFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

repositoryFile.RepositoryFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId">blobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256">contentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId">lastCommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput">authorEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput">authorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput">commitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessageInput">createCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessageInput">deleteCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput">executeFilemodeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">overwriteOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput">startBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessageInput">updateCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail">authorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName">authorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessage">createCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessage">deleteCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode">executeFilemode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch">startBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessage">updateCommitMessage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blobId`<sup>Required</sup> <a name="blobId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.blobId"></a>

```typescript
public readonly blobId: string;
```

- *Type:* string

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentSha256"></a>

```typescript
public readonly contentSha256: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `lastCommitId`<sup>Required</sup> <a name="lastCommitId" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.lastCommitId"></a>

```typescript
public readonly lastCommitId: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeouts"></a>

```typescript
public readonly timeouts: RepositoryFileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference">RepositoryFileTimeoutsOutputReference</a>

---

##### `authorEmailInput`<sup>Optional</sup> <a name="authorEmailInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmailInput"></a>

```typescript
public readonly authorEmailInput: string;
```

- *Type:* string

---

##### `authorNameInput`<sup>Optional</sup> <a name="authorNameInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorNameInput"></a>

```typescript
public readonly authorNameInput: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitMessageInput`<sup>Optional</sup> <a name="commitMessageInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```typescript
public readonly commitMessageInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `createCommitMessageInput`<sup>Optional</sup> <a name="createCommitMessageInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessageInput"></a>

```typescript
public readonly createCommitMessageInput: string;
```

- *Type:* string

---

##### `deleteCommitMessageInput`<sup>Optional</sup> <a name="deleteCommitMessageInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessageInput"></a>

```typescript
public readonly deleteCommitMessageInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `executeFilemodeInput`<sup>Optional</sup> <a name="executeFilemodeInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemodeInput"></a>

```typescript
public readonly executeFilemodeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `overwriteOnCreateInput`<sup>Optional</sup> <a name="overwriteOnCreateInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```typescript
public readonly overwriteOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `startBranchInput`<sup>Optional</sup> <a name="startBranchInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranchInput"></a>

```typescript
public readonly startBranchInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RepositoryFileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

---

##### `updateCommitMessageInput`<sup>Optional</sup> <a name="updateCommitMessageInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessageInput"></a>

```typescript
public readonly updateCommitMessageInput: string;
```

- *Type:* string

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `createCommitMessage`<sup>Required</sup> <a name="createCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.createCommitMessage"></a>

```typescript
public readonly createCommitMessage: string;
```

- *Type:* string

---

##### `deleteCommitMessage`<sup>Required</sup> <a name="deleteCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.deleteCommitMessage"></a>

```typescript
public readonly deleteCommitMessage: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `executeFilemode`<sup>Required</sup> <a name="executeFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.executeFilemode"></a>

```typescript
public readonly executeFilemode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `overwriteOnCreate`<sup>Required</sup> <a name="overwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```typescript
public readonly overwriteOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `startBranch`<sup>Required</sup> <a name="startBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.startBranch"></a>

```typescript
public readonly startBranch: string;
```

- *Type:* string

---

##### `updateCommitMessage`<sup>Required</sup> <a name="updateCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.updateCommitMessage"></a>

```typescript
public readonly updateCommitMessage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.Initializer"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

const repositoryFileConfig: repositoryFile.RepositoryFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch">branch</a></code> | <code>string</code> | Name of the branch to which to commit to. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content">content</a></code> | <code>string</code> | File content. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.encoding">encoding</a></code> | <code>string</code> | The file content encoding. Valid values are: `base64`, `text`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath">filePath</a></code> | <code>string</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project">project</a></code> | <code>string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail">authorEmail</a></code> | <code>string</code> | Email of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName">authorName</a></code> | <code>string</code> | Name of the commit author. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage">commitMessage</a></code> | <code>string</code> | Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.createCommitMessage">createCommitMessage</a></code> | <code>string</code> | Create commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.deleteCommitMessage">deleteCommitMessage</a></code> | <code>string</code> | Delete Commit message. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode">executeFilemode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables or disables the execute flag on the file. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable overwriting existing files, defaults to `false`. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch">startBranch</a></code> | <code>string</code> | Name of the branch to start the new commit from. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.updateCommitMessage">updateCommitMessage</a></code> | <code>string</code> | Update commit message. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Name of the branch to which to commit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

File content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#content RepositoryFile#content}

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

The file content encoding. Valid values are: `base64`, `text`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#encoding RepositoryFile#encoding}

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The full path of the file.

It must be relative to the root of the project without a leading slash `/` or `./`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#file_path RepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#project RepositoryFile#project}

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Email of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#author_email RepositoryFile#author_email}

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Name of the commit author.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#author_name RepositoryFile#author_name}

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

Commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `createCommitMessage`<sup>Optional</sup> <a name="createCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.createCommitMessage"></a>

```typescript
public readonly createCommitMessage: string;
```

- *Type:* string

Create commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#create_commit_message RepositoryFile#create_commit_message}

---

##### `deleteCommitMessage`<sup>Optional</sup> <a name="deleteCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.deleteCommitMessage"></a>

```typescript
public readonly deleteCommitMessage: string;
```

- *Type:* string

Delete Commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#delete_commit_message RepositoryFile#delete_commit_message}

---

##### `executeFilemode`<sup>Optional</sup> <a name="executeFilemode" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.executeFilemode"></a>

```typescript
public readonly executeFilemode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables or disables the execute flag on the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#execute_filemode RepositoryFile#execute_filemode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteOnCreate`<sup>Optional</sup> <a name="overwriteOnCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```typescript
public readonly overwriteOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable overwriting existing files, defaults to `false`.

This attribute is only used during `create` and must be use carefully. We suggest to use `imports` whenever possible and limit the use of this attribute for when the project was imported on the same `apply`. This attribute is not supported during a resource import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

##### `startBranch`<sup>Optional</sup> <a name="startBranch" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.startBranch"></a>

```typescript
public readonly startBranch: string;
```

- *Type:* string

Name of the branch to start the new commit from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#start_branch RepositoryFile#start_branch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RepositoryFileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#timeouts RepositoryFile#timeouts}

---

##### `updateCommitMessage`<sup>Optional</sup> <a name="updateCommitMessage" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileConfig.property.updateCommitMessage"></a>

```typescript
public readonly updateCommitMessage: string;
```

- *Type:* string

Update commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#update_commit_message RepositoryFile#update_commit_message}

---

### RepositoryFileTimeouts <a name="RepositoryFileTimeouts" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.Initializer"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

const repositoryFileTimeouts: repositoryFile.RepositoryFileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#create RepositoryFile#create}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#delete RepositoryFile#delete}. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#update RepositoryFile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#create RepositoryFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#delete RepositoryFile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/repository_file#update RepositoryFile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryFileTimeoutsOutputReference <a name="RepositoryFileTimeoutsOutputReference" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-gitlab'

new repositoryFile.RepositoryFileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryFileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.repositoryFile.RepositoryFileTimeouts">RepositoryFileTimeouts</a>

---



