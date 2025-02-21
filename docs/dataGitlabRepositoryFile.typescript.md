# `dataGitlabRepositoryFile` Submodule <a name="`dataGitlabRepositoryFile` Submodule" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabRepositoryFile <a name="DataGitlabRepositoryFile" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/repository_file gitlab_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer"></a>

```typescript
import { dataGitlabRepositoryFile } from '@cdktf/provider-gitlab'

new dataGitlabRepositoryFile.DataGitlabRepositoryFile(scope: Construct, id: string, config: DataGitlabRepositoryFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig">DataGitlabRepositoryFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig">DataGitlabRepositoryFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabRepositoryFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isConstruct"></a>

```typescript
import { dataGitlabRepositoryFile } from '@cdktf/provider-gitlab'

dataGitlabRepositoryFile.DataGitlabRepositoryFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformElement"></a>

```typescript
import { dataGitlabRepositoryFile } from '@cdktf/provider-gitlab'

dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformDataSource"></a>

```typescript
import { dataGitlabRepositoryFile } from '@cdktf/provider-gitlab'

dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport"></a>

```typescript
import { dataGitlabRepositoryFile } from '@cdktf/provider-gitlab'

dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabRepositoryFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabRepositoryFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabRepositoryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/repository_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabRepositoryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.blobId">blobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.contentSha256">contentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.executeFilemode">executeFilemode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lastCommitId">lastCommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.ref">ref</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blobId`<sup>Required</sup> <a name="blobId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.blobId"></a>

```typescript
public readonly blobId: string;
```

- *Type:* string

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.contentSha256"></a>

```typescript
public readonly contentSha256: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `executeFilemode`<sup>Required</sup> <a name="executeFilemode" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.executeFilemode"></a>

```typescript
public readonly executeFilemode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `lastCommitId`<sup>Required</sup> <a name="lastCommitId" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.lastCommitId"></a>

```typescript
public readonly lastCommitId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabRepositoryFileConfig <a name="DataGitlabRepositoryFileConfig" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.Initializer"></a>

```typescript
import { dataGitlabRepositoryFile } from '@cdktf/provider-gitlab'

const dataGitlabRepositoryFileConfig: dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.filePath">filePath</a></code> | <code>string</code> | The full path of the file. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.project">project</a></code> | <code>string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.ref">ref</a></code> | <code>string</code> | The name of branch, tag or commit. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/repository_file#id DataGitlabRepositoryFile#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The full path of the file.

It must be relative to the root of the project without a leading slash `/` or `./`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/repository_file#file_path DataGitlabRepositoryFile#file_path}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/repository_file#project DataGitlabRepositoryFile#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The name of branch, tag or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/repository_file#ref DataGitlabRepositoryFile#ref}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRepositoryFile.DataGitlabRepositoryFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/repository_file#id DataGitlabRepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



